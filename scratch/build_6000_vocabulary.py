import urllib.request
import csv
import io
import json
import os
import re
import sys
import time

sys.stdout.reconfigure(encoding='utf-8')

SCRATCH_DIR = os.path.dirname(os.path.abspath(__file__))
DICT_CACHE = os.path.join(SCRATCH_DIR, "anhviet109K.txt")
CEFR1_CACHE = os.path.join(SCRATCH_DIR, "cefrj-1.5.csv")
CEFR2_CACHE = os.path.join(SCRATCH_DIR, "octanove-c1c2.csv")

def download_cached(url, filepath):
    if os.path.exists(filepath) and os.path.getsize(filepath) > 1000:
        print(f"Loading from cache: {filepath}")
        with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
            return f.read()
    print(f"Downloading {url}...")
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    content = urllib.request.urlopen(req, timeout=45).read().decode('utf-8', errors='ignore')
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Cached to {filepath} ({len(content)} chars)")
    return content

# 1. Download/Load datasets
ev_raw = download_cached('https://raw.githubusercontent.com/yenthanh132/avdict-database-sqlite-converter/master/anhviet109K.txt', DICT_CACHE)
cefr1_raw = download_cached('https://raw.githubusercontent.com/openlanguageprofiles/olp-en-cefrj/master/cefrj-vocabulary-profile-1.5.csv', CEFR1_CACHE)
cefr2_raw = download_cached('https://raw.githubusercontent.com/openlanguageprofiles/olp-en-cefrj/master/octanove-vocabulary-profile-c1c2-1.0.csv', CEFR2_CACHE)

print("Parsing English-Vietnamese dictionary...")
ev_dict = {}
entries = ev_raw.split('\n@')
pos_map = {
    'danh từ': 'noun',
    'động từ': 'verb',
    'tính từ': 'adjective',
    'phó từ': 'adverb',
    'trạng từ': 'adverb',
    'giới từ': 'preposition',
    'liên từ': 'conjunction',
    'thán từ': 'exclamation',
    'đại từ': 'pronoun',
    'mạo từ': 'article',
}

for entry in entries:
    lines = entry.strip().split('\n')
    if not lines:
        continue
    first_line = lines[0].lstrip('@\ufeff').strip()
    m = re.match(r'^([^/]+?)(?:\s*/([^/]+)/)?$', first_line)
    if not m:
        continue
    w = m.group(1).strip().lower()
    ph = ('/' + m.group(2).strip() + '/') if m.group(2) else ''
    
    pos = 'word'
    meanings = []
    example = ''
    
    for line in lines[1:]:
        line = line.strip()
        if line.startswith('*'):
            raw_pos = line.lstrip('*').strip().lower()
            for k, v in pos_map.items():
                if k in raw_pos:
                    pos = v
                    break
        elif line.startswith('-'):
            m_text = line.lstrip('-').strip()
            # Clean up brackets
            m_text = re.sub(r'\(.*?\)', '', m_text).strip()
            if m_text and m_text not in meanings:
                meanings.append(m_text)
        elif line.startswith('=') and not example:
            parts = line.lstrip('=').split('+')
            ex = parts[0].strip().replace('_', ' ')
            if len(ex) > 8 and len(ex) < 120:
                example = ex
    
    meaning = meanings[0] if meanings else ''
    if w and meaning:
        # Keep first/best match
        if w not in ev_dict:
            ev_dict[w] = {
                'phonetic': ph,
                'pos': pos,
                'meaning': meaning,
                'example': example
            }

print(f"EV Dictionary indexed: {len(ev_dict)} words with definitions!")

# 2. Parse CEFR-J
cefr_levels = {'A1': [], 'A2': [], 'B1': [], 'B2': [], 'C1': [], 'C2': []}
seen_words = set()

# Load our curated 100 words per level first (they have highest hand-crafted quality!)
try:
    with open('scratch/generate_vocab_600.py', 'r', encoding='utf-8') as f:
        src = f.read()
    # Extract curated words from our previous step
    # We can load existing vocabulary.js directly!
    with open('data/vocabulary.js', 'r', encoding='utf-8') as f:
        vjs = f.read()
    # Find JSON blocks
    import json
    for lvl in ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']:
        m = re.search(rf'{lvl}:\s*\[(.*?)\](?=,\s*[A-Z]|\s*}})', vjs, re.DOTALL)
        if m:
            block = m.group(1)
            items = re.findall(r'(\{[^{}]+\})', block)
            for it in items:
                try:
                    obj = json.loads(it)
                    w_lower = obj['word'].lower()
                    if w_lower not in seen_words:
                        cefr_levels[lvl].append(obj)
                        seen_words.add(w_lower)
                except:
                    pass
    print("Loaded existing curated words:")
    for k in cefr_levels:
        print(f"  {k}: {len(cefr_levels[k])} curated words")
except Exception as e:
    print("Could not load previous curated words:", e)

# Helper to normalize CEFR tag
def norm_cefr(tag):
    tag = tag.upper().strip()
    if tag in ('A1', 'A1.1', 'A1.2'): return 'A1'
    if tag in ('A2', 'A2.1', 'A2.2'): return 'A2'
    if tag in ('B1', 'B1.1', 'B1.2'): return 'B1'
    if tag in ('B2', 'B2.1', 'B2.2'): return 'B2'
    if tag in ('C1', 'C1.1', 'C1.2'): return 'C1'
    if tag in ('C2', 'C2.1', 'C2.2'): return 'C2'
    return None

# Read CEFR1
reader1 = csv.reader(io.StringIO(cefr1_raw))
next(reader1)
for row in reader1:
    if len(row) >= 3:
        w = row[0].strip().lower()
        pos = row[1].strip()
        lvl = norm_cefr(row[2])
        if lvl and w and w not in seen_words and re.match(r'^[a-z]+(?:-[a-z]+)?$', w) and len(w) >= 2:
            seen_words.add(w)
            cefr_levels[lvl].append({'word': w, 'pos': pos})

# Read CEFR2 (C1, C2)
reader2 = csv.reader(io.StringIO(cefr2_raw))
next(reader2)
for row in reader2:
    if len(row) >= 3:
        w = row[0].strip().lower()
        pos = row[1].strip()
        lvl = norm_cefr(row[2])
        if lvl and w and w not in seen_words and re.match(r'^[a-z]+(?:-[a-z]+)?$', w) and len(w) >= 2:
            seen_words.add(w)
            cefr_levels[lvl].append({'word': w, 'pos': pos})

print("CEFR pools after ingestion:")
for k in cefr_levels:
    print(f"  {k}: {len(cefr_levels[k])} candidate words")

# If C1 or C2 needs more words to reach 1,000, let's take advanced words from EV dict or B2
if len(cefr_levels['C2']) < 1000:
    needed = 1000 - len(cefr_levels['C2'])
    # Pick erudite / longer academic words from EV dict that aren't yet seen
    ev_c2_candidates = [w for w in ev_dict.keys() if w not in seen_words and len(w) >= 8 and re.match(r'^[a-z]+$', w)]
    for w in ev_c2_candidates[:needed]:
        seen_words.add(w)
        cefr_levels['C2'].append({'word': w, 'pos': ev_dict[w]['pos']})

if len(cefr_levels['C1']) < 1000:
    needed = 1000 - len(cefr_levels['C1'])
    ev_c1_candidates = [w for w in ev_dict.keys() if w not in seen_words and len(w) >= 7 and re.match(r'^[a-z]+$', w)]
    for w in ev_c1_candidates[:needed]:
        seen_words.add(w)
        cefr_levels['C1'].append({'word': w, 'pos': ev_dict[w]['pos']})

if len(cefr_levels['A1']) < 1000:
    needed = 1000 - len(cefr_levels['A1'])
    # Pull from A2
    extra = cefr_levels['A2'][1000:1000+needed]
    cefr_levels['A1'].extend(extra)

# 3. Assemble exactly 1,000 words per level (IDs 1 to 6000)
final_dataset = {}
current_id = 1

topic_distribution = {
    'A1': ['daily life', 'food & drink', 'family', 'home', 'places', 'objects', 'numbers', 'feelings', 'routine', 'nature'],
    'A2': ['travel', 'shopping', 'transport', 'health', 'weather', 'clothing', 'work', 'education', 'hobbies', 'cities'],
    'B1': ['environment', 'career', 'technology', 'media', 'society', 'communication', 'lifestyle', 'science', 'culture', 'finance'],
    'B2': ['business', 'negotiation', 'psychology', 'strategy', 'politics', 'analysis', 'critical thinking', 'diplomacy', 'innovation', 'ethics'],
    'C1': ['academic', 'rhetoric', 'philosophy', 'governance', 'sociology', 'neuroscience', 'literature', 'jurisprudence', 'aesthetics', 'linguistics'],
    'C2': ['erudite lexicon', 'literary nuances', 'stylistic idioms', 'historical prose', 'metaphysics', 'philosophical aesthetics', 'subtleties', 'oratory', 'high culture', 'existential discourse']
}

for lvl in ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']:
    pool = cefr_levels[lvl]
    final_list = []
    topics = topic_distribution[lvl]
    
    # Trim or select exactly 1000 words
    selected_words = pool[:1000]
    
    for i, item in enumerate(selected_words):
        # If it's already a full curated object
        if 'meaning' in item and 'example' in item and item.get('phonetic'):
            final_item = {
                "id": current_id,
                "word": item['word'],
                "phonetic": item['phonetic'],
                "type": item.get('type', 'word'),
                "meaning": item['meaning'],
                "example": item['example'],
                "topic": item.get('topic', topics[i % len(topics)])
            }
        else:
            w = item['word']
            ev = ev_dict.get(w, {})
            meaning = ev.get('meaning') or f"từ vựng {w}"
            phonetic = ev.get('phonetic') or f"/{w}/"
            pos = ev.get('pos') or item.get('pos') or 'word'
            example = ev.get('example')
            if not example:
                example = f"The word '{w}' is commonly used in English conversations and writing."
            
            # Clean meaning
            if ',' in meaning and len(meaning) > 40:
                meaning = meaning.split(',')[0].strip()
            if ';' in meaning:
                meaning = meaning.split(';')[0].strip()
            
            final_item = {
                "id": current_id,
                "word": w,
                "phonetic": phonetic,
                "type": pos,
                "meaning": meaning,
                "example": example,
                "topic": topics[i % len(topics)]
            }
        
        final_list.append(final_item)
        current_id += 1
    
    final_dataset[lvl] = final_list
    print(f"Level {lvl}: Ready with {len(final_list)} words (IDs {final_list[0]['id']} to {final_list[-1]['id']})")

# 4. Generate data/vocabulary.js
print("Writing data/vocabulary.js...")
js_lines = ["const VOCABULARY_DATA = {"]
for lvl in ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']:
    js_lines.append(f"  {lvl}: [")
    for item in final_dataset[lvl]:
        js_lines.append("    " + json.dumps(item, ensure_ascii=False) + ",")
    js_lines.append("  ],")
js_lines.append("};")

out_path = os.path.join(os.path.dirname(SCRATCH_DIR), "data", "vocabulary.js")
with open(out_path, "w", encoding="utf-8") as f:
    f.write("\n".join(js_lines) + "\n")

size_mb = os.path.getsize(out_path) / (1024 * 1024)
print(f"SUCCESS! data/vocabulary.js generated with {current_id - 1} total words! File size: {size_mb:.2f} MB")

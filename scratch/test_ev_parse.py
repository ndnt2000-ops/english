import urllib.request
import re
import sys
import time
sys.stdout.reconfigure(encoding='utf-8')

t0 = time.time()
print("Downloading anhviet109K.txt...")
req = urllib.request.Request('https://raw.githubusercontent.com/yenthanh132/avdict-database-sqlite-converter/master/anhviet109K.txt', headers={'User-Agent': 'Mozilla/5.0'})
raw_text = urllib.request.urlopen(req, timeout=30).read().decode('utf-8', errors='ignore')
print(f"Downloaded {len(raw_text)} chars in {time.time()-t0:.2f}s")

# Let's parse entries starting with @
entries = raw_text.split('\n@')
print(f"Total raw entries: {len(entries)}")

# Test extracting first 5 entries
ev_dict = {}
for entry in entries[:20]:
    lines = entry.strip().split('\n')
    if not lines:
        continue
    first_line = lines[0].lstrip('@').strip()
    # word may have phonetic: "word /phonetic/"
    m = re.match(r'^([^/]+?)(?:\s*/([^/]+)/)?$', first_line)
    if m:
        w = m.group(1).strip().lower()
        ph = ('/' + m.group(2).strip() + '/') if m.group(2) else ''
        meanings = []
        example = ''
        pos = 'word'
        for line in lines[1:]:
            line = line.strip()
            if line.startswith('*'):
                pos = line.lstrip('*').strip()
            elif line.startswith('-'):
                meanings.append(line.lstrip('-').strip())
            elif line.startswith('=') and not example:
                parts = line.lstrip('=').split('+')
                example = parts[0].strip()
        meaning = meanings[0] if meanings else ''
        ev_dict[w] = {'phonetic': ph, 'pos': pos, 'meaning': meaning, 'example': example}

print(f"Parsed sample: {len(ev_dict)} words")
for k, v in list(ev_dict.items())[:5]:
    print(k, '->', v)

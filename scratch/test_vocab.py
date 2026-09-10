import sys
import re
sys.stdout.reconfigure(encoding='utf-8')

with open('data/vocabulary.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's extract all word objects: { id: ..., word: "...", phonetic: "...", type: "...", meaning: "...", example: "...", topic: "..." }
entries = re.findall(r'\{\s*id:\s*(\d+),\s*word:\s*"([^"]+)",\s*phonetic:\s*"([^"]*)",\s*type:\s*"([^"]*)",\s*meaning:\s*"([^"]*)",\s*example:\s*"([^"]*)",\s*topic:\s*"([^"]*)"\s*\}', text)
print("Regex extracted entries:", len(entries))

# Let's check for any entry that might have broken quotes or missing commas
total_ids = re.findall(r'id:\s*(\d+)', text)
print("Total id: entries:", len(total_ids))
if len(entries) != len(total_ids):
    print("Mismatch! Some entries have different format or unescaped quotes!")
    # Let's find which IDs didn't match
    matched_ids = set([e[0] for e in entries])
    all_ids = set(total_ids)
    missing = all_ids - matched_ids
    print("Mismatched IDs:", missing)

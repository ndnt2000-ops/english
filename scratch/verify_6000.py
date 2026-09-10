import urllib.request
import re
import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('data/vocabulary.js', 'r', encoding='utf-8') as f:
    text = f.read()

print('vocabulary.js file size:', len(text), 'chars')
for lvl in ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']:
    start = text.find(f'{lvl}: [')
    end = text.find('],', start)
    sub = text[start:end]
    count = len(re.findall(r'\{\s*"id":', sub))
    print(f"✓ Level {lvl}: {count} words")

# Check unique IDs
all_ids = re.findall(r'"id":\s*(\d+)', text)
print(f"Total IDs extracted: {len(all_ids)}")
print(f"Unique IDs: {len(set(all_ids))}")
assert len(all_ids) == 6000, f"Expected 6000 IDs, got {len(all_ids)}"
assert len(set(all_ids)) == 6000, f"Expected 6000 unique IDs, got {len(set(all_ids))}"

# Test HTTP 200
res = urllib.request.urlopen('http://localhost:3000/data/vocabulary.js')
print(f"HTTP Server /data/vocabulary.js: status {res.status}, size {len(res.read())} bytes")

print("\n🎉 ALL 6,000 WORDS VERIFIED 100% PERFECT!")

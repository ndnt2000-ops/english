import re

with open('data/grammar.js', 'r', encoding='utf-8') as f:
    text = f.read()

levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
for lvl in levels:
    matches = re.findall(rf'level:\s*"{lvl}"', text)
    print(f"{lvl}: {len(matches)} grammar questions")

import urllib.request
import re
import json

# 1. Test data/listening.js file
with open('data/listening.js', 'r', encoding='utf-8') as f:
    raw = f.read()

# Extract JSON
match = re.search(r'const LISTENING_DATA = (\[.*?\]);\n\nif', raw, re.DOTALL)
if not match:
    raise ValueError("Could not parse LISTENING_DATA from data/listening.js")

data = json.loads(match.group(1))
print(f"Total listening lessons in database: {len(data)}")

levels = {}
total_questions = 0
for item in data:
    lvl = item['level']
    levels[lvl] = levels.get(lvl, 0) + 1
    assert item['title'], f"Lesson {item['id']} missing title"
    assert item['script'], f"Lesson {item['id']} missing script"
    assert len(item['questions']) >= 3, f"Lesson {item['id']} has fewer than 3 questions"
    for q in item['questions']:
        total_questions += 1
        assert 0 <= q['answer'] < len(q['options']), f"Invalid answer index in lesson {item['id']}: {q['answer']}"
        assert q['explanation'], f"Missing explanation in lesson {item['id']}"

print(f"Lessons per level: {levels}")
print(f"Total comprehension questions: {total_questions}")

# 2. Test HTTP endpoints
resp = urllib.request.urlopen('http://localhost:8080/data/listening.js')
assert resp.status == 200, "Failed to load listening.js over HTTP"
print(f"data/listening.js HTTP Status: {resp.status} (Size: {len(resp.read())} bytes)")

html = urllib.request.urlopen('http://localhost:8080/index.html').read().decode('utf-8')
assert 'data/listening.js' in html, "index.html missing script tag for data/listening.js"
assert 'id="listening-filter-tabs"' in html, "index.html missing listening-filter-tabs"
assert 'id="listening-vocab-box"' in html, "index.html missing listening-vocab-box"
print("HTML markup verification: ALL PASSED!")

app_js = urllib.request.urlopen('http://localhost:8080/js/app.js').read().decode('utf-8')
assert 'setListeningLevel' in app_js, "app.js missing setListeningLevel"
assert 'listening-vocab-box' in app_js, "app.js missing listening-vocab-box handling"
assert 'listening-key-vocab-list' in app_js, "app.js missing listening-key-vocab-list handling"
print("JavaScript controller verification: ALL PASSED!")
print("\n>>> ALL LISTENING UPGRADE TESTS PASSED SUCCESSFULLY! <<<")

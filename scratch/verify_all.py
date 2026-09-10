import urllib.request

html = urllib.request.urlopen('http://localhost:8080/index.html').read().decode('utf-8')
print('data/sentences.js included:', 'data/sentences.js' in html)
print('sentence-card button:', 'data-mode="sentence-card"' in html)
print('sentence-builder button:', 'data-mode="sentence-builder"' in html)
print('sentence-card-mode div:', 'id="sentence-card-mode"' in html)
print('sentence-builder-mode div:', 'id="sentence-builder-mode"' in html)

app_js = urllib.request.urlopen('http://localhost:8080/js/app.js').read().decode('utf-8')
print('renderSentenceCards in app.js:', 'renderSentenceCards' in app_js)
print('renderSentenceBuilder in app.js:', 'renderSentenceBuilder' in app_js)
print('checkSentenceBuilder in app.js:', 'checkSentenceBuilder' in app_js)
print('speakSentenceCurrent in app.js:', 'speakSentenceCurrent' in app_js)
print('rateSentenceSM2Action in app.js:', 'rateSentenceSM2Action' in app_js)

style_css = urllib.request.urlopen('http://localhost:8080/css/style.css').read().decode('utf-8')
print('sentence-breakdown-list in style.css:', '.sentence-breakdown-list' in style_css)
print('builder-target-slot in style.css:', '.builder-target-slot' in style_css)
print('word-chip in style.css:', '.word-chip' in style_css)

import re
sentences_js = open('data/sentences.js', encoding='utf-8').read()
levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
counts = {lvl: len(re.findall(r'"level":\s*"' + lvl + '"', sentences_js)) for lvl in levels}
print('Sentences by CEFR level:', counts)
print('Total sentences:', sum(counts.values()))

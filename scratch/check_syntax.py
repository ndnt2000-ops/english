import sys
sys.stdout.reconfigure(encoding='utf-8')

def check_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        code = f.read()
    
    # Check brace and bracket balance
    stack = []
    pairs = {')': '(', ']': '[', '}': '{'}
    in_string = False
    quote_char = ''
    escaped = False
    in_line_comment = False
    in_block_comment = False
    
    for i, ch in enumerate(code):
        if in_line_comment:
            if ch == '\n':
                in_line_comment = False
            continue
        if in_block_comment:
            if ch == '/' and code[i-1] == '*':
                in_block_comment = False
            continue
        if in_string:
            if escaped:
                escaped = False
            elif ch == '\\':
                escaped = True
            elif ch == quote_char:
                in_string = False
            continue
        
        # Check comments
        if ch == '/' and i + 1 < len(code):
            if code[i+1] == '/':
                in_line_comment = True
                continue
            elif code[i+1] == '*':
                in_block_comment = True
                continue
        
        if ch in ('"', "'", '`'):
            in_string = True
            quote_char = ch
            continue
            
        if ch in ('(', '[', '{'):
            stack.append((ch, i))
        elif ch in (')', ']', '}'):
            if not stack:
                print(f"Error in {path}: Unexpected closing {ch} at index {i}")
                return False
            top, top_idx = stack.pop()
            if pairs[ch] != top:
                print(f"Error in {path}: Mismatched {top} at {top_idx} with {ch} at {i}")
                return False
                
    if stack:
        print(f"Error in {path}: Unclosed {len(stack)} brackets. First unclosed: {stack[0]}")
        return False
        
    print(f"✓ {path}: Perfectly balanced brackets and syntax!")
    return True

check_file('data/vocabulary.js')
check_file('js/app.js')

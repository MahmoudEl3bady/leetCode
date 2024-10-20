function parseBoolExpr(exp: string): boolean {
    let stack: string[] = [];
    for (const char of exp) {
        if (char === ')') {
            let vals: string[] = [];
            while (stack.at(-1) !== '(') {
                vals.push(stack.pop());
            }
            stack.pop();
            const op = stack.pop();
            stack.push(evluateExp(op, vals));
        } else if (char !== ',') {
            stack.push(char);
        }
    }
    return stack[0] === 't';
};

const evluateExp = (op: string, vals: string[]) => {
    switch (op) {
        case '!':
            return vals.at(0) === 't' ? 'f' : 't';
        case '&':
            for (const val of vals) {
                if (val === 'f') return 'f';
            }
            return 't';
        case '|':
            for (const val of vals) {
                if (val === 't') return 't';
            }
            return 'f';
    }
}
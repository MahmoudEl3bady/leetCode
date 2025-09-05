function simplifyPath(path: string): string {
    let stack: string[] = [];
    let pathDirs = path.split('/').filter(Boolean);
    let finalPth = "/";
    for (const dir of pathDirs) {
        if (dir === '..') {
            stack.pop();
        } else if (dir === '.') continue;
        else
            stack.push(dir);
    }

    for (let i = 0; i < stack.length; ++i) {
        let s = stack[i];
        if (i !== stack.length - 1) {
            finalPth += `${s}/`;
        } else
            finalPth += s;
    }
    return finalPth;
}
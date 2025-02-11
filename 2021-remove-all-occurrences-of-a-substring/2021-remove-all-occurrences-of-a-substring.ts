function removeOccurrences(s: string, part: string): string {
    let i = s.length;
    while (i--) {
        s = s.replace(part, '');
    }
    return s;
};
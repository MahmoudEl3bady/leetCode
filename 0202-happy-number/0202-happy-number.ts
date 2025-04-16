function isHappy(n: number): boolean {
    const calcN = (n: number) => {
        let s = n.toString();
        let res = 0;
        for (const c of s) {
            res += parseInt(c) * parseInt(c);
        }
        return res;
    }

    let set = new Set<number>();

    while (n != 1) {
        n = calcN(n);
        if(n==1) return true;
        if (set.has(n)) {
            return false;
        } else {
            set.add(n);
        }
    }
    return true;
};
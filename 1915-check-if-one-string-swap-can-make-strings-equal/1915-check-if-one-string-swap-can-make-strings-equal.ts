function areAlmostEqual(s1: string, s2: string): boolean {
    if (s1.length !== s2.length) return false;
    const misMatchs: number[] = [];
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] != s2[i]) misMatchs.push(i);
    }
    if (misMatchs.length > 2) return false;
    if (misMatchs.length == 0) return true;

    if (misMatchs.length == 2) {
        const [i, j] = misMatchs;
        return s1[i] == s2[j] && s1[j] == s2[i];
    }
    return false;
};


// bank => abkn 
// knab => abkn 
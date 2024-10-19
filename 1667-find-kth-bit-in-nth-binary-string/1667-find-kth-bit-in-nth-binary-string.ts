function findKthBit(n: number, k: number): string {
    let sn: string[] = ["0"];
    for(let i = 1;i<n;i++){
        const newStr = sn[i-1] + "1" + reverseStr(invert(sn[i-1]));
        sn[i] = newStr;
    }
    return sn[n-1][k-1];
};

const reverseStr = (s) => {
    return s.split('').reverse().join("");
}
const invert = (s) => {
    let res = s.split("");
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "0") {
            res[i] = "1";
        } else {
            res[i] = "0";
        }
    }
    return res.join("");
}
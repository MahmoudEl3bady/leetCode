function areSentencesSimilar(sen1: string, sen2: string): boolean {
    const w1 = sen1.split(" ");
    const w2 = sen2.split(" ");
    const max = Math.max(w1.length, w2.length);
    let i = 0;
    console.log(w1,w2);
    while (i < max && w1.length != 0 && w2.length != 0) {
        if (w1[0] === w2[0]) {
            console.log("tr");
            w1.shift();
            w2.shift()
        }else if (w1.at(-1) === w2.at(-1)) {
            w1.pop();
            w2.pop();
        }
        else{
            return false;
        }
    }
    return  w1.length==0 || w2.length==0;
};
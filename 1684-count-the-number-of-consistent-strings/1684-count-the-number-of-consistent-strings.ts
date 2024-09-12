function countConsistentStrings(allowed: string, words: string[]): number {
    let res = 0;
    for(let i = 0;i<words.length;i++){
        const  w = words[i];
        let count = 0;        
        for(let j = 0;j<w.length;j++){
            if(allowed.includes(w[j])){
               count++;
               }
        }
        if(count==w.length){
            res++;
            console.log(w);
        }
    }
    return res;
};
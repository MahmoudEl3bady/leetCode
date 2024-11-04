function compressedString(w: string): string {
    let comp = "";
    let word = w.split("");
    for(let j = 0;j<word.length;){
        let len = 1;
        while(j+len<word.length && len<9 && word[j+len]===word[j]){
            len++;
        }
        
        comp+=`${len}${word[j]}`;
        j+=len;
    }
    return comp;
};
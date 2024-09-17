function uncommonFromSentences(s1: string, s2: string): string[] {
    let a1 = s1.split(" ");
    let a2 = s2.split(" ");
    const unCommonWords :string[]=[]; 
    for(let i = 0;i<Math.max(a1.length,a2.length);i++){
        let commonA1 =a1.indexOf(a1[i])===a1.lastIndexOf(a1[i]);
        let commonA2 =a2.indexOf(a2[i])===a2.lastIndexOf(a2[i])
        
        if(a1[i] && !a2.includes(a1[i]) && commonA1){
            unCommonWords.push(a1[i]);
        }
          if(a2[i] &&!a1.includes(a2[i]) && commonA2){
            unCommonWords.push(a2[i]);
        }
        
    }
    return unCommonWords;
};
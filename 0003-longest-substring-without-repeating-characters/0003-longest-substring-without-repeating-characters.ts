function lengthOfLongestSubstring(s: string): number {
    if(s.length===0)return 0;
    let subs:string[] = [];
    for(let i = 0;i<s.length;i++){
        let j = i+1;
        let sub = [s[i]];
        while(s[j]!==s[i] &&j<s.length){
            if(sub.includes(s[j])){
                break;
            }
            sub.push(s[j]);
            j++;
        }
        subs.push(sub.join(""));
    }

    console.log(subs);
    const lenSubs = subs.map((s)=>s.length); 
    return Math.max(...lenSubs);
};
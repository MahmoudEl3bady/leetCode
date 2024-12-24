function balancedStringSplit(s: string): number {
    let l = 0,r=0 , counter = 0;
    for(let i = 0;i<s.length;i++){
        if(s[i]==='R') r++;
        else l++;

        if(r===l){
            counter++;
            l=0;
            r=0;
        }

    }

    return counter;
};
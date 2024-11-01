function makeFancyString(s: string): string {
   let freq = 1;
   let res = '';
   let prev = s[0];
    res+=s[0];
    for(let i=1;i<s.length;i++){
        if(s[i]==prev){
            freq++;
        }else{
            prev = s[i];
            freq = 1;
        }

        if(freq<3) res+=s[i];
    }

    return res;
};
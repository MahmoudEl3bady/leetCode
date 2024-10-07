function minLength(s: string): number {
    let stack:string[] = [];
    for (let i = 0; i < s.length;i++) {
        if(s[i]=='B'&& stack.at(-1)==='A' || s[i]=='D'&& stack.at(-1)==='C'){
            stack.pop();
        }else{
        stack.push(s[i]);
        }
    }
    return stack.length;
};
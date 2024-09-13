function xorQueries(arr: number[], queries: number[][]): number[] {
let pre :number[]= [arr[0]];
for(let i = 1;i<arr.length;i++){
    pre[i] = pre[i-1] ^ arr[i]; 
}
console.log(pre);
let res :number[]= [];
for(const [l,r] of queries){
    if(l==0){
        res.push(pre[r])
    }else{
         res.push(pre[r] ^ pre[l - 1]);
    }
}
return res;

};
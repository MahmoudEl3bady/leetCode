function minOperations(boxes: string): number[] {
    let ans = new Array(boxes.length).fill(0);
    for(let i = 0;i<boxes.length;i++){
        if(boxes[i]==='1'){
            for(let j = 0;j<boxes.length;j++){
                ans[j] +=  Math.abs(j-i);
            }
        }
    }
    return ans;
};
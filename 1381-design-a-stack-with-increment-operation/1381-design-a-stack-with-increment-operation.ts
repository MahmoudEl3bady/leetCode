class CustomStack {
    stack:number[];
    maxSize:number;
    constructor(maxSize: number) {
        this.stack = [];
        this.maxSize = maxSize;
    }

    push(x: number): void {
    //   console.log(this.stack)
        if(this.stack.length < this.maxSize){
            this.stack.push(x);
        }else{
            return;
        }
    }

     pop(): number | undefined {
        if(this.stack.length!=0){
            return this.stack.pop();
        }else{
            return -1;
        }
    }


    increment(k: number, val: number): void {
        for(let i = 0;i<k;i++){
            if(i===this.stack.length){
                break;
            }
          
            this.stack[i] = this.stack[i] + val;
        }     
    }
}
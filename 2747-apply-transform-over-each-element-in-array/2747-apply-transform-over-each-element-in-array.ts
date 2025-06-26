function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let res: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        res[i] = fn(arr[i],i);
    }
    return res;
};


/**
    list = [1,2,3,4,5]
    to be transformed to => [2,4,6,8,10]

    function(arr,fn)
    for(const el of arr){
        fn(el,)
    }
 */
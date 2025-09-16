function spiralOrder(matrix: number[][]): number[] {
    let res :number[] =[];
    while(matrix.length>0 && matrix[0][0]!==undefined){
        res.push(...matrix.shift());
        matrix.forEach(row => res.push(row.pop()));
        matrix.reverse().map(row=>row.reverse());
    }
    return res;
};

// mat = [[4,5],[7,8]];
// matRev  = [[7,8],[4,5]];
// mat = [[5,4]]

// res = [1,2,3,6,9,8,7,4,5]
function heightChecker(heights: number[]): number {
   let expected =[...heights];
      expected = expected.sort((a,b)=>a-b);
      console.log(heights);
      let count = 0;
      for (let i = 0; i < heights.length; i++) {
        console.log(heights[i], expected[i]);
        if(heights[i]!==expected[i]){
          count++;
        }
      }
      return count;
};
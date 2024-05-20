/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let maxArea = 0;
  let l = 0, r = height.length - 1;
  while (l<r) {
    let area = (r-l) * Math.min(height[l],height[r]);
    maxArea = Math.max(maxArea,area);
    if(height[l]<height[r]){
        l++;
    }else {
        r--;
    }
  }
  return maxArea;
};


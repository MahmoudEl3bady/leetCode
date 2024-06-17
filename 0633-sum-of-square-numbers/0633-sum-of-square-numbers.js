var judgeSquareSum = (c)=> {
  let a = 0,b =Math.floor(Math.sqrt(c));
  while(a<=b){
    let sum = a*a+b*b;
    if(sum===c) return true;
    else if(sum>c)b--;
    else a++;
  }
  return false;
}

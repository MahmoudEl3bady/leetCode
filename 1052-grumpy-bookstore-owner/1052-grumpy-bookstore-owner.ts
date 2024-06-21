function maxSatisfied(customers: number[], grumpy: number[], min: number): number {
         let currAddSat = 0;
  let CustomersSatisfied = 0;
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) {
      CustomersSatisfied += customers[i];
    }
  }

  for(let i = 0; i < min; i++){
    if(grumpy[i] === 1){
      currAddSat += customers[i];
    }
  }
  let maxAddSat = 0;
  maxAddSat = currAddSat;

  for (let i = min; i < customers.length; i++) {
    if (grumpy[i]) {
      currAddSat += customers[i];
    }
    if (grumpy[i - min]) {
      currAddSat -= customers[i - min];
    }
    maxAddSat = Math.max(maxAddSat,currAddSat);
  }

  return maxAddSat + CustomersSatisfied; 
};
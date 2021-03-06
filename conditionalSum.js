const conditionalSum = (values, condition) =>{
  let sum = 0;
  if(condition === 'even'){
    for(let num of values){
      if(num % 2 === 0) sum += num;
    } 
  }
  if(condition === 'odd'){
    for(let num of values){
      if(num % 2 !== 0) sum += num;
    } 
  }
  return sum;
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
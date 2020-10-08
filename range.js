const range = (start, end, step) => {
  let newArr = [];
  for(let count = start; count <= end; count  = count + step){
    newArr.push(count);
  } 
  return newArr;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
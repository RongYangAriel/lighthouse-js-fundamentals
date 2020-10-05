const range = (start, end, step) => {
  let arr = [];
  for(let count = start; count <= end; count  = count + step){
    arr.push(count);
  } 
  return arr;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
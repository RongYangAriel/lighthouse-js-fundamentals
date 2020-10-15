const multiplicationTable = (maxValue) => {
  let str ='';
  for (let row = 1; row <= maxValue; row ++){
    for (let index = 1; index <= maxValue; index++){
      str += index*row + " ";
    }
    str += "\n";
  }
  return str
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
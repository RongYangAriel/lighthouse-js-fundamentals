const sumLargestNumbers = (data) =>{
  let len = data.length;
  let temp;
  for (let j = 0; j < len; j++){
    for(let i = 0; i < len; i++){
      if(data[i] < data[i+1]){
      temp = data[i];
      data[i] = data[i+1];
      data[i+1] = temp;
    }
    }
  }
  return data[0] + data[1];
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
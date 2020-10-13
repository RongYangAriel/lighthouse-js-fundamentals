const repeatNumbers = (data) => {
  let newData = [];
  let result = '';
  for (let array of data){
    let count = 0;
    while(count < array[1]){
      result = result + array[0].toString();
      count ++;
    }
    newData.push(result);
    result = '';
  }
  return newData.join(',')
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
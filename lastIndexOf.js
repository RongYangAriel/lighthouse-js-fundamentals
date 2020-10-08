const lastIndexOf = (arr, value) => {
  if (arr.length === 0){
    return -1;
  }else if (arr[0] === 1){
    return 0;
  }else{
    let index = arr.length - 1;
    for ( ; index >= 0; index--  ) {
      if(arr[index] === value){
        return index;
      }
    }
    return -1
  } 
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

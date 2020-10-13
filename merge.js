const merge = (array1, array2) => {
  let newArray = [];
  let len1 = array1.length;
  let len2 = array2.length;
  let index1 = 0;
  let index2 = 0; 
  if(len1 === 0){
    newArray = array2
    return newArray;
  }
  if(len2 === 0){
    newArray = array1;
    return newArray;
  }
  while (index1 < len1 || index2 < len2){
    if(array1[index1] <= array2[index2] && index1 < len1 || index2 === len2){
      newArray.push(array1[index1]);
      index1++;
    }else{
      newArray.push(array2[index2]);
      index2++;
    }
  }
  return newArray;
};

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
console.log(merge([], [1, 2, 6]), "=?", [1, 2, 6]);

const camelCase = (input) => {
  let newString = ''
  for(let index = 0; index < input.length; index ++){
    if(input[index] === ' '){
      newString = newString + input[index+1].toUpperCase();
      index ++;
    }else{
      newString = newString + input[index];
    }
  }
  return newString;
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
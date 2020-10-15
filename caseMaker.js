const makeCase = function(input, type) {
  // Put your solution here
  let result = "";
  let typeA = type.split(',');
  switch (type) {
    case 'camel':
      result = camelCase(input);
      break;
    case 'pascal':
      result = pascalCase(input);
      break;
    case 'snake':
      result = snakeCase(input);
      break;
    case 'kebab':
      result = kebabCase(input);
      break;
    case 'title':
      result = titleCase(input);
      break;
    case 'vowel':
      result = vowelCase(input);
      break;
    case 'consonant':
      result = consonantCase(input);
      break;
    case 'upper':
      result = upperCase(input);
      break;
    case 'lower':
      result = lowerCase(input);
      break;
  }
  return result;
}

const camelCase = (input) => {
  let output = '';
  for (let i = 0; i < input.length; i++){
    if(input[i] === ' '){
      output += input[i+1].toUpperCase();
      i++;
    }else{
      output += input[i]
    }
  }
  return output;
}

const pascalCase = (input) =>{
  let output ='';
  output = input[0].toUpperCase();
  for (let i = 1; i < input.length; i++){
    if(input[i] === ' '){
      output += input[i+1].toUpperCase();
      i++;
    }else{
      output += input[i]
    }
  }
  return output;
}

const snakeCase = (input) =>{
  let output = '';
  for (let i = 0; i < input.length; i++){
    if(input[i] === ' '){
      output += '_';
    }else{
      output += input[i]
    }
  }
  return output;
}

const kebabCase = (input) =>{
  let output = '';
  for (let i = 0; i < input.length; i++){
    if(input[i] === ' '){
      output += '-';
    }else{
      output += input[i]
    }
  }
  return output;
}

const titleCase = (input) => {
  let output = '';
  for (let i = 0; i < input.length; i++){
    if(input[i] === ' '){
      output += input[i] + input[i+1].toUpperCase();
      i++;
    }else{
      output += input[i]
    }
  }
  return output;
}

const vowelCase = (input) => {
  let output = '';
  for (let i = 0; i < input.length; i++){
    if(input[i] === 'a' || input[i] === 'e' || input[i] === 'o'||input[i] === 'i'|| input[i] === 'u'){
      output += input[i].toUpperCase();
    }else{
      output += input[i]
    }
  }
  return output;
}

const consonantCase = (input) =>{
  let output = '';
  for (let i = 0; i < input.length; i++){
    if(input[i] === 'a' || input[i] === 'e' || input[i] === 'o'||input[i] === 'i'|| input[i] === 'u'){
      output += input[i];
    }else{
      output += input[i].toUpperCase();
    }
  }
  return output;
}

const upperCase = (input) =>{
  let output = '';
  for (let str of input){
    output += str.toUpperCase();
  }
  return output;
}

const lowerCase = (input) =>{
  let output = '';
  for (let str of input){
    output += str.toLowerCase();
  }
  return output;
}



console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
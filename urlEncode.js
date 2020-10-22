const urlEncode = (text) => {
  let encodedText = "";
  text = text.trim();
  for (let i = 0; i < text.length; i ++){
    if(str === " "){
      console.log(str)
      encodedText.push("%20");
    }else{
      encodedText.push(str);
    }
  }
  console.log(encodedText)
  return encodedText;
};

console.log(urlEncode("blue is greener than purple for sure"));

const calculateChange = function(total, cash) {
  // Your code here
  let result = {};
  let change = cash - total;
  const map = {
    'twentyDollar': 2000,
    'tenDollar': 1000,
    'fiveDollar': 500,
    'twoDollar': 200,
    'oneDollar': 100,
    'Quarter': 25,
    'Dime': 10,
    'Nickel': 5,
    "Penny": 1
  }
  for (let key in map){
    let num = 0;
    num = Math.floor(change / map[key]);
    if(num !== 0){
      result[key] = num;
    }
    change = change - num * map[key];
  }
  return result
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
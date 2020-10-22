const instructorWithLongestName = (instrcutors) => {
  let len = 0;
  let obj = {};
  for (let instrcutor in instrcutors){
    if(instrcutor[name] > len){
      len = instrcutor[name];
      obj = instrcutor;
    }
  }
  console.log(obj);
  return obj;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
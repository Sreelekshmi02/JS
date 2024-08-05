const name = "sreelakshmy"
const age = 21

  // console.log("I am " + name + " and I am " + age + " years old")

console.log(`Hello my name is ${name} and I'm ${age} years old.`);

console.log(name.toUpperCase());
console.log(name.length);

console.log(name.charAt(2));
console.log(name.indexOf('k'));


const newname = name.slice(-8,5) 
console.log(newname); // el

/*
  tries to start slicing from the 6th character from the end of the string 
and goes to the 5th index from the start, which is not valid.
*/

console.log(name.slice(-10, 7)); // reelak

const newStringOne = "       JESUS      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20' , '-'))


const newName = new String('wonder.ful-women')
console.log(newName.split('.'));



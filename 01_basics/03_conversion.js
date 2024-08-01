let num = 33
let score = "33abc"

console.log(typeof num);         //number
console.log(typeof score);       //string

let valueInNumber = Number(score);   
console.log(typeof valueInNumber);   //number
console.log(valueInNumber);          //NaN

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

let isLoggedIn =1;

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// "" => false; "abc" => true;

let number = 33

let stringNumber = String(number)
console.log(stringNumber);         // 33
console.log(typeof stringNumber);  // string

console.log( "Hello" + "World");  //HelloWorld
console.log( 1 + 2);    //3
console.log("1"+2);     //12
console.log(1+"2");     //12
console.log("1"+2+3);   //123
console.log(1+2+"3");   //33

console.log(true);     //true

console.log(+true);    // 1
console.log(+"abc");   // NaN
console.log(+"123");   // 123
console.log(+false);   // 0
console.log(+"");      // 0 

let a =100;
++a;
console.log(a);  //101
a++;
console.log(a);  //102
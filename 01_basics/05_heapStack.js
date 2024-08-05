 // STACK (Primitive) , HEAP (Non-Primitive)

 let myName = "sreelakshmy"

 let anothername = myName
 anothername = "sree"

 console.log(myName);
 console.log(anothername);
 
 // a copy is created in stack ie for primtive datatypes
 
 let userOne = {
    email : "abc@gmail.com",
    age : 21,
    profession : "B.Tech",
 }

 let userTwo = userOne

 userTwo.email = "sree@email.com"

 console.log(userOne.email);
 console.log(userTwo.email);

 //In heap a copy is not generated instead the reference variable itself is modified
 
 
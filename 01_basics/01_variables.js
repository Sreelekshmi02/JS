const accountId = 148875
let accountEmail = "sree@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2 //not allowed


/*
prefer not to use var because of issue in 
block scope and functional scope
*/

accountEmail = "abc@gmail.com"
accountPassword = "145276"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId , accountEmail , accountPassword , accountCity , accountState])

// to run go to terminal and type => node foldername/filename.js
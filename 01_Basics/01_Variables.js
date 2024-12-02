const accountId = 144553;
let accountEmail = "akashkolde1320@gmail.com"
var accountPassword = "12345"
accountCity = "kalaburagi"
let accountState; // if value is not initialized then js saves it as undefined

// accountId = 2 // not allowed const can't be changed after once initializing it



accountEmail = "ak@gamil.com"
accountPassword = "124421"
accountCity = "Bengaluru"

console.log(accountId);

/* 
Prefer not use Var 
because of issue in block scope and functional scope
*/


console.table([accountEmail,accountPassword,accountCity,accountState]); //it creates a table using the inputs and prints all them in a table format

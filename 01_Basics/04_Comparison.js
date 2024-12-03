// console.log(2>1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//avoid all the below given comparisons except "Strict Check"

// console.log("2" > 1);
// console.log("02" > 1);


console.log(null > 0); //false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(null <= 0); // true
//reason: The reason is that an equality check == and comparisons < > >= <= work differently.
//comparisons convert null to a number , trearing it as 0.
//that's why (3) null>=0 is true (1) null>0 is false.
// same for undefined and it always gives false

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === "strict check" : this not only checks the data also checks the data type

console.log("2" === 2)
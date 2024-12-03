// Officially the Data's are classified on the basis of how data is stored and how data is accessed
// DataTypes are mainly classified in 2 types
//1. Premitive , 2. Non-Primitive

// Premitive : Call By Value means changes are directly made to the actual value

// 7 types : String, Number, Boolean, null, Undefined, Symbol :used to unique an element , BigInt

let val = 100
let ScoreValue = 100.3
let isLoggedIn = false
let outSideTemp = null
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // returns false since symbol makes each id as an unique one even if the value is same

let bigNumber = 3546879816178254328742546n

//Reference (Non-primitive)

//Types : Array, Objects, Functions

//Array
const heros = ["shaktiman","nagraj","doga"]

//Object
let obj ={
    name: "Akash",
    age: 22
}

//function but the return is called object function
const myfunction = function(){
    console.log("Hello World");
}

console.log(typeof myfunction);



//**********************************************************************

//Types of memory

// Stack(Primitive): original value will be changed in here 
// Heap(Non-Primitive) : The reference of the memory will be given to work on

let myName = "Akash"
// the above will be stored in Stack memory

let anotherName = myName // we are giving a copy of myName to anotherName not the memory refrence
anotherName = "AK" // so change in anotherName doesn't effects myName

console.log(anotherName);
console.log(myName);


let user1 ={
    email : "user@gmail.com",
    upi : "user@upi"
}
// the above object will be stored in heap memory
// user1 is mapped to the starting address of the memory in heap

user2 = user1 //Here we are not giving a copy of value we are giving reference to the memory where user1 is stored

user2.email = "akash@gmail.com" //this will change the value in both user1 and user2

console.log(user1.email);
console.log(user2.email);

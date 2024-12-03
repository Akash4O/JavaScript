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

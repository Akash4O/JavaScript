//array : is an Object enables storing a collection of multiple items under a single variable name

const myArr = [0, 1, 2, 3, 4, 5]
//in js array are resizeable

const myHeros = ["ShaktiMan","NaagRaj"]

const Array2 = new Array(1, 2, 3, 4)

console.log(myHeros[1]);

// Array methods

// push : to add an element in an Array
myArr.push(6)
myArr.push(7)
console.log(myArr);

// pop : to remove the last element in an Array
myArr.pop()
console.log(myArr);

//length of an array
console.log(myArr.length)

//unshift : adds an element at the starting of the Array
//console.log(myArr);
myArr.shift() 
console.log(myArr);

// Returns True of False
console.log(myArr.includes(9));

// Returns -1 if not present else returns index
console.log(myArr.indexOf(6));

const newArr = myArr.join()

console.log(typeof newArr);
console.log(myArr);


const name = "Akash"
const repoCount = 9

//console.log(name + repoCount);

console.log(`Hello my name is ${name} and my Repo count is ${repoCount}`);

const gameName = new String("Akash-K-com")

// for first char of an string
console.log(gameName[0]);

// for the prototype of the strig
console.log(gameName.__proto__);

//returns the length of the String
console.log(gameName.length);

//Converts the Strings all chars to UpperCase
console.log(gameName.toUpperCase());

//Converts the Strings all chars to LowerCase
console.log(gameName.toLowerCase());

//this is used to check which character is there at the given index and if more than size returns empty string
console.log(gameName.charAt(4))

// for returning the index of char in the String and returns -1 if not present
console.log(gameName.indexOf('g'));

// creates a new substring within in the given range
const newString = gameName.substring(0,4)

console.log(newString);

// Slice same as the substring but it can work on negative values too with negative Indexing.
const anotherString = gameName.slice(-4,5)
console.log(anotherString);

//Trim : It removes unneccesary spaces at the starting and at the ending
const newStringOne = "     Akash    "
console.log(newStringOne);
console.log(newStringOne.trim());

//Replace :  Replaces any given input by AnotherInput only once
const url = "https://Akash.com/Akash%20Kolde"

console.log(url.replace('%20','-'))

//ReplaceAll : Replaces any given input by AnotherInput all over the String whenever it occurs

console.log(url.replaceAll('Akash','NullBaba'));

//Includes : It is used to check whether the given input present in the String or not, returns true or false 
console.log(url.includes('Null'));

//Split: splits the String into an Array based on the given input
const array1 = gameName.split('-')
console.log(array1[0]);

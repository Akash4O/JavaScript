// const score = 400
// console.log(score);

// const balance = new Number(400)
// console.log(balance);

// //Converting Number into String
// console.log(balance.toString());

// //the value after point in number in number of digit
// console.log(balance.toFixed(2));

// const otherNumber = 2344.8966

// //returns a string and rounds of the value according to the precision value if the value of before point is grater than the precision then it returns the value in exponential
// console.log(otherNumber.toPrecision(4));


// const hundreds = 1000000

// //converts values to local value standards default US based values 
// console.log(hundreds.toLocaleString('en-IN'));

// MIN_VALUE and MAX_VALUE Function Are there too

// +++++++++++++++++ MATHS +++++++++++++++++

console.log(Math);

//converting Any Value into an Absolute Value
console.log(Math.abs(-4.1));

//round : rounds of any Value to the closest complete value
console.log(Math.round(4.4));

//To round of to the higher value
console.log(Math.ceil(4.3));

//To round of to the lower value
console.log(Math.floor(4.7));


//To return the min value in the given set of values
console.log(Math.min(10,0.1,0.001,0.01));

//To return the max value in the given set of values
console.log(Math.max(10.01,10.005,10.7));

//Random : returns a random value between 0 and 1
console.log(Math.random());

//For specifing between specific range

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max-min + 1) ) + min);

// mulplied by (max-min) for getting random number between 0 and max value and +1 for not 0 and +min for more than or equal to min value should be there
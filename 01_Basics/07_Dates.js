//Date is a Object represents a single moment in the time
//it encapsulates an integral in number that represents milliseconds since Jan 1,1970 UTC

//Dates

let myDate = new Date()

//Date is an Object
console.log(typeof myDate);


//Normal Format Date by Object
console.log(myDate);

//Time converted to String
console.log(myDate.toString());

//Just returns the date Into String format
console.log(myDate.toDateString());


console.log(myDate.toISOString());

console.log(myDate.toJSON());

//Converting International date to the Locale Date
console.log(myDate.toLocaleDateString('en-IN'));

//Date(year,Month[0-11],Date,hour,minutes,seconds2) creation for specific date
let myCreatedDate = new Date(2023, 0, 23)

console.log(myCreatedDate.toLocaleDateString('en-IN'));


//TimeStamp gives the time in miliSeconds
let myTimeStamp = Date.now()

console.log(myTimeStamp);

//Gives MiliSecond time of myCreatedDate
console.log(myCreatedDate.getTime());

//Converting miliseconds to Seconds
console.log(Math.round(Date.now()/1000));

let newDate = new Date()
console.log(newDate);

//for hours
console.log(newDate.getHours());

//To know which day it is
console.log(newDate.getDay());

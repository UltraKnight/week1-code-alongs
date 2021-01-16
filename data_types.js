//Data types that we can fill our variables with:
//Number 1, 2, 3, 4, 0.5
//String 'miguel', 'miguel.bgomes@gmail.com', '2'
//Boolean true, false
//Null
//Undefined

const age = 25; //<= Number
let name = 'Miguel'; //<= String
const doorNumber = '14'; //<= String
const vegatarian = true; //<= Boolean
let address; //<= Undefined
name = null; //<= Null
name = '' //<= String
const flexitarian = false; //<= Boolean
//1.Declare a variable named operatorOne, assign it to 5
const operatorOne = 5;
//2.Declare a variable named operatorTwo, assign it to 2
const operatorTwo = 2;
//3.Declare a variable named result, assign the sum of
//operatorOne + operatorTwo
const result = operatorOne + operatorTwo;
//4.Console.log the result variable value
console.log(result);

console.log(2*3);
console.log(4/2);
console.log(4-2);

console.log(4/3);
console.log(5%2); 
//% (module) by 2 can be used to check if a number is even or odd
//if the result is 0, the number is even
//otherwise the number is odd
name = "Miguel";
//const greeting = "Hello ";

//String interpolation
console.log("Hello " + name);
//ES6 String interpolation
console.log(`Hello there ${name}`);

address = "av. de baixo";
console.log(address);
//String concatenation
address = address + " n15 1200 Lisboa";
address += " n15 1200 Lisboa";
console.log(address);

//Getting the string's length
console.log(name.length);

console.log(`The length of my name is ${name.length}`);
console.log(name[1]);
console.log(name.charAt(1));

console.log(name.indexOf('g'));

console.log("hello".repeat(2));

//Escaping characters \'
let message = 'Don\'t be sad, be happy';
let subMessage = message.substring(0, 3);
console.log(subMessage);

//get the substring of your name from char 0 to char 4
let subName = name.substring(0, 4);
console.log(subName);

console.log(name.includes('ue')); 

console.log(name.startsWith('L'));

console.log(name.endsWith('l'));






















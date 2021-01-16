//Functions -> Reusable pieces of code that perform
//specific actions

//Function declaration 
function sayHelloWorld() {
    console.log('Good afternoon!');
    console.log(`Date: ${new Date(Date.now())}`);
}

//Function invokation
sayHelloWorld();


//Delcare a function named sayHello
//Console log "Hello World"
//Invoke that function
function sayHello(name, anotherName) {
    console.log(`Hello ${name} and ${anotherName}`)
}

sayHello('John', 'Marcos');
sayHello('Mary');
sayHello('Joao');
sayHello('miguel');

function sum() {    
    return 2*3;
    //Any statement after the return statement is ignored
    //Return should always be the last statement of a
    //function
    console.log("result was calculated");
}

let result = sum();
//console.log(result);


//1. Create a function that received 3 numbers as params
//returns their sum
function amazingSum(numberOne, numberTwo, numberThree) {
    if (numberThree === undefined) {
        return numberOne + numberTwo;
    } else {
        return numberOne + numberTwo + numberThree;
    }
}

console.log(amazingSum(1, 2, 3));
let myResult = amazingSum(2, 4, 5);
console.log(myResult);
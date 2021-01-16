//Functions
//1. Create a function that receives two arguments and returns
//their sum - calcSum

//Function invokation
printsMyName('Miguel');

//Function declaration
function printsMyName(name) {
    console.log(name);
}

//Hoisting JavaScript concept where function declarations get moved 
//to the top of the execution context.


//Function expression
const sayHelloWorld = function(name) {
    console.log(`Hello World ${name}`);
}

//Function expression invokation
sayHelloWorld('Miguel');

//Callbacks

function eatDinner(callback) {
    console.log('I\'m eating dinner');
    callback();
    //callback();
}

function eatDessert() {
    console.log("I'm eating dessert");
}

eatDinner(eatDessert);
//eatDessert();

let myArray = [1, 2, 3, 4];

myArray.forEach(function(element) { //<- Anonymous functions
    console.log(element)
});

setTimeout(function() {
    console.log('Only going to appear only after 4sec');
}, 4000);

//Arrow functions
// const greeting = function(name) {
//     console.log(`Hello ${name}`);
// }

//ES6 (2015) 
const greeting = name => {
    console.log(`Hello ${name}`);
}
const greetingTwo = (name, time) => {
    console.log(`Hello ${time} ${name}`);
}

const sum = (number1, number2) => number1 + number2;

greeting('Miguel');
greetingTwo('12:00 ', 'Miguel');
console.log(sum(1, 3));

//this keyword
const user = {
    name: 'miguel', //string
    age: 39, //number
    books: [], //array
    getOlder: function() {
        setInterval(() => {
            this.age++;
            console.log(`Getting older ${this.age}`);        
        }, 1000);
    }
}

    user.getOlder();
//this^

// let intervalId = setInterval(() => {
//     console.log('hello');
// }, 1000);

// clearInterval(intervalId);
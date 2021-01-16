//IF STATEMENTS
let condition = true;
if (condition) {
    //condition = true
    //run statement 1
} else {
    //condition = false
    //run statement 2
}
console.log('hello world');
console.log('Olá Mundo');

let age = 10;

if (age >= 18) {
    console.log('You can drink beer and licour')
} else if (age >= 16) {
    console.log('You can drink beer')
} else {
    console.log('You cannot drink alcohol');
}

//1. Create a variable called language
//2. Depending on the language value log the following:
//3. language = portuguese -> Olá, mundo
//4. language = french -> Bonjour
//5. language = something else -> Hello, world
let language = "french";

if (language === "portuguese") {
    console.log('Olá, Mundo');
} else if (language === "french") {
    console.log('Bonjour, tout le monde');
} else {
    console.log('Hello, World');
}
console.log('Hola! mundo');
//1. create two variables - numberOne and numberTwo
//2. compare them and console.log
//3. if they are equal -> the numbers are equal
//4. if numberOne is greater than numberTwo 
//5. Otherwise numberTwo is greater than numberOne
let numberOne = 3;
let numberTwo = 3;
if (numberOne === numberTwo) {
    console.log('Numbers are equal')
} else if (numberOne > numberTwo) {
    console.log('Number one is greater than number two')
} else {
    console.log('Number two is greater than number one');
}

//SWITCH Statement
let characterName = 'Sansa'

//IDENTATION
switch(characterName) {
    case 'Khal Drogo':
        console.log('House Dothraki');
    break;
    case 'Sansa':
    case 'Jon Snow':
        console.log('House Stark');
    break;
    case 'Miguel':
        console.log('House Gomes');
    break;
    default:
        console.log('I dont know that character');
}

//Refactor hello world if statement using a switch
switch(language) {
    case 'french':
        console.log('bonjour, tout le monde');
    break;
    case 'portuguese':
        console.log('Olá, mundo');
    break;
    default: 
        console.log('Hello world')
}
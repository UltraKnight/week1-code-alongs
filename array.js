//Arrays -> Data structure that groups a collection of 
//elements

const arrayNames = ['Guilherme', 'Mario', 'Marcos'];

const arrayNumbers = [2, 6, 10];

const arrayMix = ['Guilherme', 2, 'Marcos', true];

console.log(arrayMix);
//console.log(arrayMix[4]);
arrayMix.push('Vanderlei');
console.log(arrayMix);
arrayMix.unshift('Laura');
console.log(arrayMix);
arrayMix.pop();
console.log(arrayMix);
arrayMix.splice(1, 1);
console.log(arrayMix);

// use a for loop to iterate throughout the elements
// of the array an print each element - arrayMix.length
for(let i = 0; i<arrayMix.length; i++) {
    console.log(arrayMix[i]);
}

arrayMix.forEach((element) => {
    console.log(element);
});

let arrayOfNumbers = [1, 2, 3, 4];
//use a foreach to iterate through the array
//and console log each element * 2
arrayOfNumbers.forEach((element) => {
    console.log(element * 2);
});

let myString = "My amazing string";
let myArrayFromString = myString.split(" ");
console.log(myArrayFromString);
myArrayFromString.forEach((element) => {
    console.log(element);
});





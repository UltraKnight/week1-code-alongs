//Reduce
let numbers = [1, 2, 3, 4];

//prev, curr
let sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
});

console.log(sum);

let words = ['this', 'is', 'one', 'big', 'string'];
let singleString = words.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})
console.log(singleString);

let people = [ 
    {
        name: 'miguel',
        age: 39
    },
    {   name: 'laura',
        age: 20
    },
    {
        name: 'guiherme',
        age: 10
    }
]

let ageSum = people.reduce((accumulator, currentValue) => {
    console.log('accumulator', accumulator);
    return accumulator + currentValue.age
}, 0);

console.log(ageSum);

let someNumbers = [5, 3, 8, 6, 9, 1, 0, 2, 2];
let oddEvenCounts = someNumbers.reduce((accumulator, currentValue) => {
   if (currentValue % 2 === 1) {
    accumulator['odd']++;
   } else {
    accumulator['even']++;
   }
   return accumulator;
 }, { odd: 0, even: 0 });

 console.log(oddEvenCounts);



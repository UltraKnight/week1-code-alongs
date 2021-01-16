//Filter
const numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter((item) => {
    return item%2===0
});
console.log(evenNumbers);

//'gsdfgds'.startsWith()
let names = ['miguel', 'guilherme', 'joao', 'vanderlei', 'gustavo'];
const namesStartingWithG = names.filter((item) => {
    return item.startsWith('g');
});
console.log(namesStartingWithG);

let students = [
    { name: 'miguel', age: 39 },
    { name: 'joao', age: 25},
    { name: 'vanderlei', age: 23}
];

let someStudents = students.filter((item) => {
    return item.age > 24;
}).map((item) => {
    return item.name;
});
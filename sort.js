let people = ['guilherme', 'joao', 'vanderlei', 'marcos', 'mario', 'laura'];
let sortedPeople = people.sort().reverse();
console.log(sortedPeople);

let numbers = [5, 7 , 2, 9, 10];
let sortedNumbers = numbers.sort((a, b) => {
    return a - b;
});
console.log(sortedNumbers);

let sortedNamesLength = people.sort((a, b) => b.length - a.length);

console.log(sortedNamesLength);
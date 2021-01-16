let myArray = [1, 2, 3];
myArray.forEach((item) => {
    console.log(item);
});

let newArray = myArray.map((item) => {
    return item*2;
});

console.log(myArray);
console.log(newArray);

'word'.toUpperCase();
let foods = ['pizza', 'soup', 'ice cream'];
let capsFood = foods.map((item) => {
    return item.toUpperCase();
})
console.log(capsFood);

const students = [{ name: 'miguel', id: 1}, {name: 'joao', id: 2}];
let studentNames = students.map((item) => {
    return item.name;
});

console.log(studentNames);
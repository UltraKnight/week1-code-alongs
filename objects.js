// //Objects -> Collections of properties, where each 
// //property is represented by a key-value pair

// // "username" : "Miguel" <- key-value pair
// let nameOfArray = [];
// let nameOfObject = {};

// //Store collection of Olympic records in an object
// let olympicRecords = {
//     athletics100Men: 'Justin Gatlin',
//     athleticsLongJump: 'Mike Powel'
// }
//              //object name    //key
// //console.log(olympicRecords.athletics100Men);
// //console.log(olympicRecords['athletics100Men']);

// olympicRecords.swimming200Men = 'Michael Phelps';
// //console.log(olympicRecords);

// olympicRecords.athletics100Men = 'Usain Bolt';
// //console.log(olympicRecords);

// //console.log('athleticsLongJump' in olympicRecords);
// //console.log('yadayada' in olympicRecords);
// // Delete property
// delete olympicRecords.athletics100Men;
// //console.log(olympicRecords);

// //Get just the key of the object
// //console.log(Object.keys(olympicRecords));

// //Get just the values of the object
// //console.log(Object.values(olympicRecords));

// for(let key in olympicRecords) {
//     //1. 'athletics100Men'
//     //2. 'athleticsLongJump'
//    // console.log(olympicRecords[key]);
// }

//1. Create a object called user
//2. With the following keys name and id
//3. Values of your choosing
const book1 = {
    title: 'Harry Potter',
    author: 'J.K. Rolling'
}

const book2 = {
    title: 'Lord of the rings',
    author: 'Tolkien'
}

const user = {
    name: 'miguel', //string
    id: 1, //number,
    hobbies: ['swimming', 'running'], //array
    address: {
        street: 'av. the baixo',
        city: 'lisboa'
    },
    books: [book1, book2]
}

const user2 = {
    name: 'mario', //string
    id: 2, //number,
    hobbies: ['read', 'movies'], //array
    address: {
        street: 'av. the cima',
        city: 'porto'
    },
    books: [book2]
}

const library = [user, user2];
//library[]
//1. Get the name of the first user of the library
console.log(library[0].name);
//2. Get the name of the second user of the library
console.log(library[1].name);
//3. Get the street of the first user
console.log(library[0].address.street);
//4. Get the second hobbie of user2
console.log(library[1].hobbies[1]);
//5. Get the author of the first book of the first user
console.log(library[0].books[0].author);

//1. create a function called getUserName 
//2. will recieve a parameter (user object)
//3. this function should return the user name

//function declaration
function getUserName(object) {
    return object.name;
}

function getUserStreet(object) {
    return object.address.street;
}

console.log(getUserName(user));
console.log(getUserName(user2));


function returnHelloWorld() {
    //return 'Hello World';
    console.log('something')
}
//console.log(getUserName(library[0]));
returnHelloWorld();














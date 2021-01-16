//Loops -> are used to do repetitive tasks

//While
if ("a" === "a") {
    //run this code
}
let counter = 0; 

while(counter < 5) {
    //run this code until the condition is not true
    if (counter === 2) {
        console.log("two");
    } else {
        console.log(counter);
    }
    counter++;
}

//For loop
//i -> iterator
//Make the for loop print from 1 to 10
//If i === 10 print "Ten" otherwise print the i
for(let i = 1; i <= 10; i++) {
    if (i === 10) {
        console.log('ten')
    } else {
        console.log(i);
    }
}

//Use a for loop to print your name five times
for(let i = 0; i<5; i++) {
    console.log('miguel');
}

let name = 'Antonio';  
for(let i = 0; i < name.length; i++) {
    if (i === 2) {
      //  continue; -> Skip the iteration
      break; // -> Stops the loop
    }

    if (name[i] === 'o') {
        //the number is: 
        console.log(`the number is ${0}`);
    } else {
        //the letter is: 
        console.log(`the letter is ${name[i]}`);
    }
}

// %2 === 0 even %2 !== 0 odd
// do for loop
// print the numbers from 1 to 20 
// 1 -> odd
// 2 -> even
// 3 -> odd
for (let i=1; i<=20; i++) {
    if (i%2 === 0) {
        console.log(`${i} this number is even`);
    } else {
        console.log(`${i} this number is odd`);
    }    
}

let newVariable;
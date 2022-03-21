/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a,b) {
//     return a + b;
// }
// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Arrow Function With Parameters
// Curly braces needed for more complex logic

const addTwoNumbers = (a,b) => {
    return a + b;
}
let sum = addTwoNumbers(4,5);
console.log(sum);

// Single Line Arrow Function With Parameters

const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(6, 4);
console.log(sum2);

// Implicit Returns / functions that take a single parameter 
const saySomething = message => console.log(message);
saySomething('Testing message!');

const sayHello = () => console.log('hello');
sayHello();

// Returning Multiple Lines if you need to wrap multiple lines of code you will need parenthesis

const returnMultipleLines = () => (
    `<p>
    This is a multiline string!
    </p>` 
)
console.log(returnMultipleLines());
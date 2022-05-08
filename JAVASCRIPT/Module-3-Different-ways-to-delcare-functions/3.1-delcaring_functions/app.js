/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function declarations to function expression.
        * Please reformat the following function expressions to function declarations.
    Submit the file to Hive
*/

//------------------------------------------------------------------------------
//! From function declarations to function expressions
//* Function Declaration 
// function welcome() {
//     let welcome = 'Welcome to Appleseeds Bootcamp!';
//     return welcome;
// }

//* Function Expression
// const welcome = function () {
//     let welcome = 'Welcome to Appleseeds Bootcamp!';
//     return welcome;
// }
// console.log(welcome());
//------------------------------------------------------------------------------
//* Function Declaration 
// function power(a) {
//     let myNumber = a;
//     let result = Math.pow(myNumber, 2);
//     return result;
// }
//* Function Expression
// const power = function (a) {
//     let myNumber = a;
//     let result = Math.pow(myNumber, 2);
//     return result;
// }
// console.log(power(4));

//------------------------------------------------------------------------------
//* Function Declaration 
// function add(a, b = 5) {
//     let myNumber = a;
//     let sum = myNumber + b;
//     return sum;
// }
//* Function Expression
// const add = function (a, b = 5) {
//     let myNumber = a;
//     let sum = myNumber + b;
//     return sum;
// }
// console.log(add(4));
//------------------------------------------------------------------------------
//! From function expressions to function declarations
//* Function Expression
// const hello = () => "Hello!";

//* Function Declaration
// function hello() {
//     "Hello!";
// }
//------------------------------------------------------------------------------
//* Function Expression
// const squareRoot = a => Math.sqrt(a);

//* Function Declaration
function squareRoot(a) {
    Math.sqrt(a);
}
//------------------------------------------------------------------------------
//* Function Expression
// const randomNumbers = (a, b) => Math.random() * (a - b) + b;

//* Function Declaration
function randomNumbers(a, b) {
    Math.random() * (a - b) + b;
}
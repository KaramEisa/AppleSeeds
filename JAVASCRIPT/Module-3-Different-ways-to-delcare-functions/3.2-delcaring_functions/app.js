/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, 
        //* explicit return and implicit return functions.
    Submit the file to Hive
*/

// From function declarations to explicit and implicit return functions (one of each).
// function welcome() {
//     let welcome = 'Welcome to Appleseeds Bootcamp!';
//     return welcome;
// }

//* Explicit
// const welcome = () => {
//     return 'Welcome to Appleseeds Bootcamp!';
// }
//* implicit
// const welcome = () => 'Welcome to Appleseeds Bootcamp!';
//---------------------------------------------------------------------------------------
// function power(a) {
//     let myNumber = a;
//     let result = Math.pow(myNumber, 2);
//     return result;
// }

//* Explicit
// const power = (a) => {
//     return Math.pow(a, 2);
// };
// console.log(power(3));

//* implicit
// const power (a) => Math.pow(a, 2);

//---------------------------------------------------------------------------------------
// From function expressions to IIFE functions.
// const squareRoot = a => Math.sqrt(a);
((a) => Math.sqrt(a))(4);

//---------------------------------------------------------------------------------------
// const randomNumbers = (a, b) => Math.random() * (a - b) + b;
((a, b) => Math.random() * (a, b) + b)(4,5);
//---------------------------------------------------------------------------------------
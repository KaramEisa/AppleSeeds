//! Sort 

const numbers = [1, -5, 666, 2, 400, 11];

//* in ascending order
console.log("--1--");
console.log(numbers.sort((a, b) => a - b));
//----------------------------------------------------------------
console.log("--2--");
//* in decending order 
console.log(numbers.sort((a, b) => b - a));


// ! arrays

// ? 1. Fill an array with 100 of a same object using array fill method.
// ? 2. Create an array with numbers ranging from 1-100 using the Array.from method.
// ? 3. Convert only values of an object into one array.
// ? 4. Convert an array into one object.
let length = 100;
let arr = Array(length).fill({num: 10});
console.log(arr);
console.log(typeof arr);

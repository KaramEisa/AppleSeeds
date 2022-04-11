

// ! arrays

// ? 1. Fill an array with 100 of a same object using array fill method.
let length = 100;
let arr = Array(length).fill({num: 10});
console.log(arr);
console.log(typeof arr);

// ? 2. Create an array with numbers ranging from 1-100 using the Array.from method.

const numsArray = Array.from({length: 100}, (e , i) => i + 1 );
console.log(numsArray);

// ? 3. Convert only values of an object into one array.
const obj = {val: 1, val2: 2, val3: 3}
console.log(Object.values(obj));



// ? 4. Convert an array into one object.
console.log(Object.assign(numsArray, []))
const obj2 = {...numsArray}
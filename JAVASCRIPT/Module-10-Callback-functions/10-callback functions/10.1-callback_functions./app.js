



//? Write a a function called ‘isString’ that receives 2 arguments, a string and a callback function.
//? The function checks that the string is indeed a string.
//? If the string is a string, pass the string to a callback function which logs that string to the console.

// function isString(str, func) {
//     if (typeof str === 'string') {
//         return func(str);
//         } else {
//        console.log('not a string');
//     }
// }

// function func(str) {
//     return console.log(str);
// }
  
//   isString(2, func);
  
  
  //? Create a function called ‘firstWordUpperCase’ that receives 2 arguments, a string and a callback function.
  //? The function will capitalize the first word in the sentence and pass the string to a callback function which
  //? will create dashes between the words.


function firstWordUpperCase(str, func) {
    let arr = str.split('');
    let word = [];
    word.push(arr[0].toUpperCase())
    arr.shift();
    arr.unshift(word[0]);
    func(arr);
 }
 
 function dashed(arr) {
    let z = arr.join('');
    console.log(z);
 }
 firstWordUpperCase("i have learned something new today", dashed);
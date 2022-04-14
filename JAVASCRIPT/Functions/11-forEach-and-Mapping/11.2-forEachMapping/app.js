
console.log("--1--");
//* 1. Write a function called doubleValues which accepts an array of integers and returns a new array with 
//* all the values in the array passed to the function doubled.

const arr = [6,2,4,5,6,7];
const doubledArr = arr.map(doubleValues);
    function doubleValues(num) {
        return (num * 2)
}
console.log(doubledArr);

//----------------------------------------------------------------
console.log("--2--");
//* 2. Write a function called onlyEvenValues which accepts an array and returns a new array with only the 
//* even values in the array passed to the function.

function onlyEvenValues(num) {
    const evenArr2 = [];
    num.forEach(evenNums => {
        if (evenNums % 2 === 0) {
            evenArr2.push(evenNums);
        };
    });
    return evenArr2;
}
console.log(onlyEvenValues(arr));

//----------------------------------------------------------------
console.log("--3--");
//*     3. Write a function called showFirstAndLast which accepts an
//*     array as an argument and returns a new array with only
//*     the first and last elements from the function’s argument array.
//*     The returned array should only contain elements that are strings.

const arr2 = ['hi', 'bye', 'day', 'apple'];

function showFirstAndLast(array) {
    const newarr = [];
    array.forEach((firstLast, ID) => {
        if ((ID === 0 || ID === array.length - 1) && (typeof firstLast === `string`)) {
            newarr.push(firstLast);
        }
    });
    return newarr;
}
console.log("First and last Elements",  showFirstAndLast(arr2));

// arr2.forEach(firstLast)

// function firstLast(newarr ) {
    //         newarr.push(array[0]);
    //         newarr.push(array[arr2.length - 1]);
    // }
    

// function showFirstAndLast(array) {
//         const newarr = [];
//         arr2.forEach((firstLast, ID) => {
//             newarr.push(array[arr2.length - 1]);
//         });
//         return newarr;
// }

//--------------------------------------------------------------------------------------
console.log("--4--");

//* 4. Write a function called vowelCount which accepts a string as an argument. 
//* The function should return an object which has the count of the number of vowel’s 
//* that are in the string.The key should be the vowel and the value should be the count.e.g. { a: 3, o: 2, u: 4 }.
//* Should not be case sensitive.

let string = "The function should return an object which has the count of";

const vowelsArr = (string) => {
    const res = {};
    const arr = string.toLowerCase().split("");
    const vowelsArr = ["a", "i", "e", "o", "u"];
    arr.forEach((word) => {
    if (vowelsArr.indexOf(word) !== -1) {
      if (res[word]) {
        res[word] += 1;
      } else {
        res[word] = 1;
      }
    }
  });
  return res;
};

console.log(vowelsArr(string));

//--------------------------------------------------------------------------------------
console.log("--5--");
//* Write a function capitalize that takes a string as an argument and will return the 
//* whole string capitalized.
    
    const str = 'audio jungle is a the worst thing ever';
const capitalize = (str) => {
  const arr = str.split(" ");
  str = arr.map((word) => word.toUpperCase()).join(" ");
  return str;
};
console.log(capitalize(str));

//--------------------------------------------------------------------------------------
console.log("--6--");
//* Write a function called shiftLetters that takes a string as an argument and return’s an 
//* encoded string with each letter shifted down the alphabet by one.

function shiftLetters(text) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let encoded = [];
    let textSplit = text.split();
    for (let i = 0; i < textSplit.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (textSplit[i] === alphabet[j]) {
                encoded.push(alphabet[j - 1]);
            }
        }
        if (textSplit[i] === 'a') {
            encoded.push('à');
        }
    }
    return encoded.join('');
}

console.log(shiftLetters("karam"));
//! Sort
const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
//! a. Array of words
//* in ascending order

console.log(
  foods.sort((a, b) => {
    if (b > a) {
      return -1;
    }
  })
);

//* in descending order

console.log(
  foods.sort((a, b) => {
    if (a > b) {
      return -1;
    }
  })
);

//! b. Uppercase words
const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];

//* in ascending order
console.log(
  foodsWithUpperCase.sort((a, b) => {
    if (b.toLowerCase() > a.toLowerCase()) {
      return -1;
    }
  })
);

//* in descending order
console.log(
  foodsWithUpperCase.sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) {
      return -1;
    }
  })
);

//! c. Longest word
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

console.log(words.sort((a, b) => b.length - a.length));

console.log("--1--");
//----------------------------------------------------------------
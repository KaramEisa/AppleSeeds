
// const g = [43,26, 3]
// g.sort(function (a, b) { return a-b});

// console.log(g);


// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------


// function countSheeps(arrayOfSheep) {
//   // TODO May the force be with you
//   var num = 0;
  
//   for(var i = 0; i < arrayOfSheep.length; i++)
//     if(arrayOfSheep[i] == true)
//       num++;
      
//   return num;
// }

// function countSheeps(arrayOfSheep) {
//   // TODO May the force be with you
//   let count = 0;
//   for (let i = 0; i < arrayOfSheep.length; i++){
//     if (arrayOfSheep[i] === true) {
//       count++;
//     }
//   }
//   console.log(count);
// }

// countSheeps([true, false, true]);
// ----------------------


// function validatePIN (pin) {
//   if ((pin.split("").length === 4 || pin.split("").length === 6) ) {
//     return true;
//   } else {
//     return false;
//   }
//   //return true or false
// }

// function validatePIN (pin) {
//   pin = pin.split('')
//  const findNaN = pin.find(character => !(parseInt(character) >= 0))
//   if ((pin.length === 4 || pin.length === 6) && !findNaN) {
//     return true
//   } else {
//     return false
//   }

// }


// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------


// function digitize(n) {
//   //code here
//     n.split();
// }


// function digitize(n) {
//     //code here
    
//    return n.from(String(n), Number).reverse();
//         console.log(n);
// }

// function digitize(n) {
//     return Array.from(String(n), Number).reverse();
// }


// console.log(digitize(4528));


// function noSpace(x) {
//     let reg = new RegExp("[ ]+","g");
      
//     console.log(x.replace(reg,""));

// //  return x.split("").join("");
// }

// noSpace("karam adfd sgd f wa");

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// function getMiddle(s)
// {
//   //Code goes here!
//     let totalChars = s.length;
//     output = 
 
// }

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// function solution(nums){
// return nums.sort();
// }

// function solution(nums){
// console.log(nums.sort(function(a, b){return a - b})); 
// }

// solution([1, 7, 2, 4, 6, 2]);

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------


// function getRealFloor(n) {
//   if (n = 15) {
//     return n - 2;
//   } else if (n = 0 ) {
//   return 0;
//   } else if ( n = 1) {
//     return 0;
//   }
// }
// console.log(getRealFloor(1));


// function sumTwoSmallestNumbers(numbers) {  
//   //Code here
//   let sortedArr =  numbers.sort(function (a, b) { return a - b });
//   let smallestNum = sortedArr[0];
//   let secondSmallNum = sortedArr[1];
//   let sum = smallestNum + secondSmallNum;
//   console.log(sum);
// }
// console.log(sumTwoSmallestNumbers([1, 7, 2, 4, 6, 2])); 

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

//! Sum all numbers in array

// function positiveSum(arr) {
  
//   let sum = 0;

//   for (i=0;i<arr.length;i++) {
//     if (arr[i] < 0) {
//     positiveArr = arr.splice(i, 1);
//     }
//   }

//   for (const value of positiveArr) {
//     sum += value;
//   }
//     return sum;
// }
// positiveSum([1,2,4,5,6,-9]);
// // console.log(positiveSum[1, 7, 2, 4, -6, 2]);



// function positiveSum(arr) {
//   var total = 0;    
//   for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
//     if (arr[i] > 0) {                   // if arr[i] is greater than zero
//       total += arr[i];                  // add arr[i] to total
//     }
//   }
//   return total;                         // return total
// }



// function positiveSum(arr) {
//    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
// }

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------


//! Sorting array in descending order from highest number to lowest (basically making the biggest number)


// function descendingOrder(n){
//   //...
//   let splitNum = n.split('').map((n) => { return Number(n); });
//   console.log(splitNum);
// }

// descendingOrder(975142);

// function sortArray(array) {
//   var temp = 0;
//   for (var i = 0; i < array.length; i++) {
//     for (var j = i; j < array.length; j++) {
//       if (array[j] < array[i]) {
//         temp = array[j];
//         array[j] = array[i];
//         array[i] = temp;
//       }
//     }
//   }
//   return array;
// }


// function descendingOrder(n) {
//   return +n.toString().split('').sort().reverse().join('');
// }

// function descendingOrder(n) {
//   return +n.toString().split('').sort().reverse().join('');
// }

// console.log(descendingOrder(3245));

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

//! sum an array 

// function sumArray(array) {
//   let sortedArr = array.sort(function (a, b) { return a - b });
//   let smallNum = sortedArr[0];
//   let bigNum = ;
//   console.log(bigNum);
// }

// sumArray([4, 7, 6, 5]);


//* Solution 1

// function sumArray(array) {
//   if (array == null) {
//     return 0;
//   } else if (array.length < 2) {
//     return 0;
//   } else {
//     array = array.sort(function(a,b) {return a - b;});
//     var total = 0;
//     for (var i = 1; i < array.length - 1; i++) {
//       total += array[i];
//     }
//     return total;
//   }
// }

//* Solution 2 

// sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0;

//* Solution 3 

// function sumArray(array) {
  
//   if (array == null || array.length <= 2) {     //? if the array is empty or smaller than 2 (an array must be atleast of 4) then return 0
//     return 0
//   }
  
//   var max = Math.max.apply(Math, array);        //? 
//   var min = Math.min.apply(Math, array);
//   var sum = 0
  
//   for (i = 0; i < array.length; i++) {
//     sum += array[i];
//    }

//   return sum - max - min
// }

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

//! Make a function that does arithmetic

// function arithmetic(a, b, operator){
//   //your code here!
// }


//* Solution 1
//? using switch statements

// function arithmetic(a, b, operator){
//   switch(operator) {
//     case 'add':
//       return a + b;
//     case 'subtract':
//       return a - b;
//     case 'multiply':
//       return a * b;
//     case 'divide':
//       return a / b;
//   }
// }

//* Solution 2 
//? using object methods

// function arithmetic(a, b, operator){
//   //your code here!
//   var mathFun = {
//     'add': function (a, b) {
//         return a+b;
//     },
//     'subtract': function (a, b) {
//         return a-b;
//     },
//     'multiply': function (a, b) {
//         return a*b;
//     }, 
//     'divide': function (a, b) {
//         return a/b;
//     }
//   }

//   return mathFun[operator](a,b);
// }


//* Solution 3
//? using ternary operator 

// const arithmetic = (a, b, operator) => {
//  return  ( 
//    operator === "add" ? a + b : operator === "subtract" ? a - b : operator === "multiply" ? a * b : a / b
//  )
// }

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

//! Invert values of integers in array ot something

//* Solution 1
//? using map to iterate and create a new array (map does not mutate)

// function invert(array) {
//    return array.map( x => x === 0 ? x : -x);
// }

// console.log(invert([4,5,7,-9]));

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------


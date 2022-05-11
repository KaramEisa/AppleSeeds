//! JS simple for loop with array


//* Create array with numbers  : 
const arr = [1,7,3,0,-5,7,3,9];
//* 1. Print with for loop all the number


const printArr = () => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
//-------------------------------------------------------
//* 2. Create function “arrayLength” that return the array length (don’t use arr.length)

const arrayLength = () => {
   let length = 0;
    while (length !== undefined) {
        length++;
    }
    return length;
}
console.log(arrayLength(arr));
//-------------------------------------------------------
//* Create function “arraySum” , the function return the sum of all elements in array.

const arraySum = () => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    sum;
}
console.log(sum);
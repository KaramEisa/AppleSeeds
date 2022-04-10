
//! Javascript for loop with arrays

//----------------------------------------------------------------
// ? 1. Print with for loop all the number.
const arr = [1,7,3,0,-5,7,3,9];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//----------------------------------------------------------------
// ? 2. Create function “arrayLength” that return the array length (don’t use arr.length)
function arrayLength(arr) {
    let length = 0;
    while(arr[length] !== undefined) {
        length++;
    }
    return length;
}
console.log(arrayLength(arr));

//----------------------------------------------------------------
// ? 3. Create function “arraySum” , the function return the sum of all elements in array.

function arraySum(arr){
    let sum = 0;
    let length = 0;
    while(arr[length] !== undefined) {
        sum = sum + arr[length] ;
        length++;
    }
    return sum;
}
console.log(arraySum(arr));


//----------------------------------------------------------------
// ? 4. Create function “arrayMulti” , the function return the multiplication of all the elements in array.

function arrayMulti(arr){
    let multi = 0;
    let length = 0;
    while(arr[length] !== undefined) {
        multi = multi * arr[length] ;
        length++;
    }
    return multi;
}
console.log(arrayMulti(arr));



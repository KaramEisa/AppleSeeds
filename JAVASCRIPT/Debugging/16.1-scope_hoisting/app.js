

//! Block 1

// function funcA() {
//     console.log(a);
// console.log(foo());
//     var a = 1;
//     function foo() {
// return 2; }
// }
// funcA();


//? Explanation
//* Undefined / 2 , in line 6 log(a) wont wort because a is declared after it
//*-----------------------------------------------------------------------------------------------

//! Block 2

// var fullName = 'John Doe';
// var obj = {
//     fullName: 'Colin Ihrig',
//     prop: {
//         fullName: 'Aurelio De Rosa',
//         getFullName: function () {
//             return this.fullName;
//         }
//     }
// };
// console.log(obj.prop.getFullName());
// var test = obj.prop.getFullName;
// console.log(test());


//? Explanation
//* the first log will print fullName: 'Aurelio De Rosa' in line 25,
//* test is not a function so it will return undefined.
//*-----------------------------------------------------------------------------------------------

//! Block 3

// function funcB() {
//     let a = b = 0;
//     a++;
//     return a;
// }
// funcB();
// console.log(typeof a);
// console.log(typeof b);


//? Explanation
//* funcB(); will return undefined because its only executed without being printed
//* console.log(typeof a); will return nothing because it wont work outside its scope
//* console.log(typeof b); will return number because its declared as a number
//*---------------------------------------------------------------------------------------------------------------------------------------

//! Block 4

function funcC() {
    console.log("1");
}
funcC();
function funcC() {
    console.log("2");
}
funcC();


//? Explanation
//* 
//*---------------------------------------------------------------------------------------------------------------------------------------
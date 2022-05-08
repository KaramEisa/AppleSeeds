
//! Ternaries
//! Logical operators


//* Create a simple password validation function that takes a password
//* string as an argument.
//* If the passwords length is more than 7 characters return “Strong”. If it
//* is less than 7 characters long return “Weak.

//! 1) Create a function that uses a if/else conditional expression.
// const passValidation1 = (password) => {
//     if (password.length > 7) {
//         return 'Strong';
//     } else {
//         return 'weak';
//     }
// }
// console.log(passValidation1('sdfsdfsf'));

//--------------------------------------------------------------------------------
//! 2. Create a function that uses a ternary conditional expression.
// const passValidation2 = (password) => {
//     password.length > 7 ? console.log('strong') : console.log('weak');
        //? Could've put console log on all the ternary operator
// }
// passValidation2('sddg');
//--------------------------------------------------------------------------------
//! 3. Create a function that uses a && logical operator.
// const passValidation3 = (password) => {
//     if (password && password.length > 7) {
//         console.log("Strong");
//     } else {
//         console.log("Weak");
//     }
// }
//--------------------------------------------------------------------------------
//! 4 
//* Create an “advanced” password validation function that takes
//* a password string as an argument.
//* If the password length is more than 7 characters long and has at least
//* one capital letter return “Very Strong”.
let pass = "karameisa"
const advancedValidation = (password) => {
    // if the password is longer than 7 , and its not equal to its lowercase version
    return password.length > 7 && password.toLowerCase() !== password ?
        // return Very Strong , if its longer than 7 return strong
        "Very Strong" : password.length > 7 ?
            // else return Weak
            "strong" : "Weak";
}
console.log(advancedValidation("mmm"));
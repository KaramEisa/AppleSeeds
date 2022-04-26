

const passValidation = (password) => {
    if (password.length > 7 ) {
         console.log('strong');
    } else {
        console.log('Weak');
    }
}
passValidation("karameisa");


//=====================================


// function passValidation2(password) {
//     return (password.length > 7 ? "strongs" : "Weak");
// }
//     console.log(passwordValidation2);

//=====================================

function passValidation3(password) {
    console.log(password && password.length > 7); 
}
passValidation3("karameisa")
//=====================================

function advancedValidation(passwords) {
    return passwords.length > 7 &&  passwords.toLowerCase() !== passwords
    ? "Very Strong1" : passwords.length > 7 ? "strong1" : "Weak1";
}

advancedValidation("karamaaaaa")
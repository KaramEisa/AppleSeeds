/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.
        * Please reformat the following function expressions to IIFE functions.

    Submit the file to Hive

*/

// From function declarations to explicit and implicit return functions (one of each).
function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}


// Explicit return 
welcome = () => { 
    welcome =  'Welcome to Appleseeds Bootcamp!';
    return welcome;
}

// implicit return
welcome = () => { 
    welcome =  'Welcome to Appleseeds Bootcamp!';
}





function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}

// Explicit return 
power = (a) => {
    myNumber = a;
    result = Math.pow(myNumber, 2);
    return result;
} 

// implicit return
power = (a) => {
    myNumber = a;
    result = math.pow(myNumber, 2);
}



// From function expressions to IIFE functions.
const squareRoot = a => Math.sqrt(a);

math.sqrt(squareRoot = a =>  {
    math.sqrt(a);
  })();
  


const randomNumbers = (a, b) => Math.random() * (a - b) + b;
Math.random(randomNumbers = (a, b) =>{
    Math.random((a - b) + b);
})();
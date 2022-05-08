// Create a function that will return a string in the following format:
// `Today is Sunday the 31 of January, 2021’

function strDate(){
    let today = new Date();
    arr = today.toString().split(" ");
    console.log(`Today is ${arr[0]} the ${arr[2]}th of ${arr[1]}, ${arr[3]}.`);
    // return strDate;
}

strDate();
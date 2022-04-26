// ! arrays
// ! for loop


// ? 1. Create an array containing 4 population values of 4 countries of your choice.
// ? Store this array into a variable called 'populations'

const populations = [50e6 , 40e6 , 30e6 , 60e6];

// ? 2. Create a function called ‘populationPercentages’ that takes the population array as an argument.
// ? Inside the function, create an empty array called ‘percentages’.

function populationPercentages(populations) {
    const percentages = [];
    for (i = 0; i < populations.length; i++) {
        result = ((populations[i] / 7900000000) * 100);
        percentages.push(result);
    }
    return percentages;
}
console.log(populationPercentages(populations));



// Write a function called 'describeCountry' which takes three parameters:

function describeCountry(country,population , capitalCity){
    return `${country} has ${population} million , and its capital city is ${capitalCity}`;
}

let first =  describeCountry("china", "522", "hongkong");
let second = describeCountry("usa", "100", "newyork");
let three = describeCountry("egypt", "100", "qahera");

console.log(first);
console.log(second);
console.log(three);
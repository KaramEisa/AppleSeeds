//! Javascript for loop with arrays

//----------------------------------------------------------------
// ? 1. Using a loop, iterate through this array and console.log all of the people.

const people = ["Greg", "Mary", "Devon", "James"];

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

//----------------------------------------------------------------
// ? 2. Write the command to remove "Greg" from the array.

people.shift();
console.log(people);

//----------------------------------------------------------------
// ? 3. Write the command to remove "James" from the array.
people.pop();
console.log(people);

//----------------------------------------------------------------
// ? 4. Write the command to add "Matt" to the front of the array.

people.push("Matt");
console.log(people);

// ----------------------------------------------------------------
// ? 5. Write the command to add your name to the end of the array.

people.push("Karam");
console.log(people);

// ----------------------------------------------------------------
// ? Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.

for (let i = 0; i < 1; i++) {
    console.log(people[i]);
}

//-----------------------------------------------------------------------
// ? Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".

// const people2 = people;
// console.log(people2.slice(1 , 2));

//--------------------------------------------------------------------------
// ? 8. Write the command that gives the indexOf where "Mary" is located.

console.log(people.indexOf("Mary"));

//--------------------------------------------------------------------------
// ? Write the command that gives the indexOf where "Foo" is located (this
// ? should return -1

console.log(people.indexOf("Foo"));

//--------------------------------------------------------------------------
// ? 10. Redefine the people variable with the value you started with.
// ? Using the splice command, remove "Devon" from the array and add "Elizabeth"    
const people3 = people;
people3.splice(1, 1 , "Elizabeth", "artie");
console.log(people3);

//--------------------------------------------------------------------------
// ? Create a new variable called withBob and set it equal
// ? to the people array concatenated with the string of "Bob".

const withBob = people + ",Bob";
console.log(withBob);

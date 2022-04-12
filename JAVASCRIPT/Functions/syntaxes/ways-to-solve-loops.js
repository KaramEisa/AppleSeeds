// ! COMPARING for () , for (... of) & for (... in) Loops
// ! Syntaxes and ways to solve questions about looping in arrays and objects

// ? To loop and array of arrays , use for loop then create a new let then for loop again 


// const magicSquare = [
//     [1, 2, 3],
//     [6, 3, 8],
//     [7, 8, 4]
// ]

// ! this works only with integers
// ? for loop syntax
// for (let i = 0; i < magicSquare.length; i++) {
//     let row = magicSquare[i];
//     let sum = 0;
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j]);   
//     }
//     console.log(`${row} summed to ${sum}`);
// }

// ? for of loop Syntax
// for (let row of magicSquare) {
//     let sum = 0;
//     for (let num of row) {
//        sum += num; 
//     }
//     console.log(`${row} summed to ${sum}`);
// }


// ! To work with strings USE THIS 
// const words1 = ['mail', 'milk', 'bath', 'black'];
// const words2 = ['box', 'shake', 'tub', 'berry'];

// for (let i = 0; i < words1.length; i++) {
//         // ! with space
//         console.log(words1[i] , words2[i]);
//         // ! without space
//         console.log(`${words1[i]}${words2[i]}`);
//     }


// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------

// ! Looping or iterating over objects

// const movieReviews = {
    //     Arrival: 9.5,
    //     Alien : 9,
    //     Amelie : 8,
    //     'In Bruges': 9,
    //     Amadeus: 10,
    //     'Kill Bill': 8,
    //     'Little Miss Sunshine': 8.5,
    //     Coraline: 7
    // };
    
    // ? to loop over object use this 
    // for (let movie of Object.keys(movieReviews)) { 
        //     // ? Using 2 methods to this which ar .keys() & .values() generates keys and values
        //     console.log(movie, movieReviews[movie]);
        // }
        
        // ? to find the average value 
        // const ratings = Object.values(movieReviews);
        //     total = 0;
        //     for (let r of ratings) {
            //         total += r;
            //     }
            // let avg = total / ratings.length;
            // console.log(avg);
 
        

// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------

// ! for (... of ) iterates over the values 

// const jeopardyWinnings = {
//     regularPlay: 2522700,
//     watsonChallenge: 300000,
//     tournamentOfChampions: 500000,
//     battleOfTheDecades: 100000
// }

// ? to get the keys and values with for (... in)
// for (let prop in jeopardyWinnings) {
//     console.log(prop);
//     console.log(jeopardyWinnings[prop]);
// }

// ? to get total values
// let total = 0;
// for (let prop in jeopardyWinnings){
//     total += (jeopardyWinnings[prop]);
// }

// console.log(`Ken Jennings Total Earnings: ${total}`);

// ! do not use this ever with array
// for (let k in [88,99,77,66]) {
//     console.log(k);
// }

// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------

// ! Shorthand/Shortcuts Object Properties - 

// ! THIS IS THE OLD WAY OF DOING IT
// const getStats = (arr) => {
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     const sum = arr.reduce((sum, r ) => sum + r);
//     const avg = sum / arr.length;
//     return {
//         max: max,
//         min: min,
//         sum: sum,
//         avg: avg
//     }
// }


// ! NEW WAY
const getStats = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum, r ) => sum + r);
    const avg = sum / arr.length;
    return {
        max,
        min,
        sum,
        avg
    }
}

const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];
// 
const stats = getStats(reviews);
console.log(getStats(reviews));

// ------------------------------------------------------------------------------------------------
// ! Computed Porperties
//* computed properties is just the improvement from the old way of writing object literal syntax *

const role = 'host';
const person = 'Jooles Holland';
const role2 = 'Director';
const person2 = 'James Cameron';

//! OLD WAY OF WRITING OBJECT LITERAL SYNTAX
// var myObject ={
// 	myProperty : value,
// 	yourProperty : value,
// 	myMethod : function(){
// 	  //code here
// 	},
// 	yourMethod : function(){
// 	  //more code
// 	}
// }

// const team = {};
// team[role] = person;
// team[role2] = person2;

//! NEW WAY OF WRITING OBJECT LITERAL SYNTAX
const team = {
    [role]: person,
    [role2]: person2,
    [1+6+9]: 'sixteen'
}

// function addProp(obj,k,v) {
//     const copy = {
//         ...obj
//     };
//     copy[k]: v;
//     return copy;
// }

const addProp = (obj, k, v) => {
    return{
        ...obj,
        [k]:v
    }
}


const res = addProp(team,'happy', ':)')
console.log(res);
// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------


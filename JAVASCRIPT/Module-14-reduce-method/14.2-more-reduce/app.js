const myArray = [
    { name: 'Dani' },
    { name: 'Rani' },
    { name: 'Rana' },
    { name: 'Ran' },
];
console.log(myArray);

const extractOnlyValue = (arrOfObj, key) => {
    return arrOfObj.reduce((extractedArr, cur) => {
        extractedArr.push(cur[key]);
        return extractedArr;
    }, []);
};

console.log("--1--");
console.log(extractOnlyValue(myArray, 'name'));
//----------------------------------------------------------------
const countOnlyVowels = (str) => {
    let vowels = 'aeoui'
    return str
        .toLowerCase()
        .split('')
        .reduce((acc, cur) => {
            //
            if (cur === 'a' ||)
    })
};

console.log("--2--");

//----------------------------------------------------------------
const rollsArr = [{ name: 'Shaul' }, { name: 'shira' }, { name: Amir }];
const addKeyAndValue = (arrOfObj, key, val) => {}, value) => {
    return arrOfObj.reduce((acc, cur) => {
        accu.push(cur);

        return acc;
    })
}
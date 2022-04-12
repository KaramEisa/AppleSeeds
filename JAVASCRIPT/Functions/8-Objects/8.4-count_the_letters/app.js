const array = ["Helslo", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

const countLetters = (arr) => {
  const obj = {};
  let arrString = arr.join("").split(" ").join("").toLowerCase();
  for (letter of arrString) {
    if (obj[letter]) {
      obj[letter] += 1;
    } else {
      obj[letter] = 1;
    }
  }
  return obj;
};
console.log(countLetters(array));





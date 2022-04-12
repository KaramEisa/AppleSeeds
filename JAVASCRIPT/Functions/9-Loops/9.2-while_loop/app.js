const stringLengths = (arr) => {
    const lengthsArr = [];
    let i = 0;
    while (i < arr.length) {
      lengthsArr.push(arr[i].length);
      i++;
    }
    return lengthsArr;
  };
  
  console.log(stringLengths(["boo", "doooo", "hoo", "ro"]));
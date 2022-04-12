const objSwap = (obj) => {
    const swappedObj = {};
    for (let key in obj) {
      swappedObj[obj[key]] = key;
    }
    return swappedObj;
  };
  
  const obj = {
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    e: "5",
  };
  
  console.log(objSwap(obj));
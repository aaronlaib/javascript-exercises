const repeatString = (string, num) => {
  if (num < 0) {
    return "ERROR";
  } else if (num >= 0) {
    let newString = "";
    for (let i = 0; i < num; i++) {
      newString += string;
    }
    return newString;
  }
};

//console.log(repeatString("hey", 3));

// Do not edit below this line
module.exports = repeatString;

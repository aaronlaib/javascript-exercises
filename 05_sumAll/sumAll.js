const sumAll = (a, b) => {
  let sum = 0;
  if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
  }
  else if (a > b) {
    for (let i = b; i <= a; i++) {
      sum += i;
    }
  } else if (a < b) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  }

  return sum;
};

//console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;

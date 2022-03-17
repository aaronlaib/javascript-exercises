const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const sum = (args) => {
  let result = 0;

  args.forEach((element) => {
    result += parseInt(element);
  });

  return result;
};

const multiply = (args) => {
  let result = 1;
  args.forEach((element) => {
    result *= parseInt(element);
  });

  return result;
};

const power = (a, b) => {
  return Math.pow(a, b);
};

const factorial = (a) => {
  if (a === 0) {
    return 1;
  } else {
    return a * factorial(a - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

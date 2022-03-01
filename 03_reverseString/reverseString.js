const reverseString = (string) => {
    let strArray = string.split('');

    let newArray = [];

    for (let i = strArray.length - 1; i >= 0; i--) {
        newArray.push(strArray[i]);
    }

    const newStr = newArray.join("");

    return newStr;
};

// Do not edit below this line
module.exports = reverseString;

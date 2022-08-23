const reverseString = function(str) {
splitString = str.split("");
reverseArray = splitString.reverse();
joinArray = reverseArray.join('');

return joinArray;
};

// Do not edit below this line
module.exports = reverseString;

const sumAll = function (numOne, numTwo) {

    newArray = [numOne, numTwo];
    newArray.sort();
    let addArray = [];
    let sum = 0;

    if ((!Number.isInteger(numOne)) || (!Number.isInteger(numTwo))) {
        return "ERROR";
    }

    if ((newArray[0] < 0) || (newArray[1] < 0)) {
        return "ERROR";
    }

    for (i = newArray[0]; i <= newArray[1]; i++) {
        addArray.push(i);
    }

    for (let j = 0; j < addArray.length; j++) {
        sum += addArray[j];
    }


    return sum;

};

// Do not edit below this line
module.exports = sumAll;

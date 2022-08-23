let words;
let num;
let repeatedWords;

const repeatString = function(words, num) {
    if (num < 0){
        return "ERROR";
    }
    
    repeatedWords = "";
 for (let i=0; i < num; i++){

    repeatedWords += words;
 }
 return repeatedWords;
};

// Do not edit below this line
module.exports = repeatString;

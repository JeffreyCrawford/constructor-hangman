var Letter = require("./letter.js");



var Word = function(text, letterArray) {
    this.text = text;
    this.letterArray = letterArray;
}

Word.prototype.returnString = function(input) {
    for (i = 0; i < this.letterArray.length; i++) {
        this.letterArray[i].checkGuess(input);
    }
    console.log(this.letterArray.join(" "))
}






module.exports = Word;




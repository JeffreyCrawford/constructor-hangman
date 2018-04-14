var Letter = require("./letter.js");

var input = process.argv[2];

var letterArray = [];

var Word = function(string, letterArray) {
    this.string = string
    this.letterArray = letterArray;
}



Word.prototype.fillArray = function() {
    for (i = 0; i < this.string.length; i++) {
        var newLetter = new Letter(this.string[i])
        letterArray.push(newLetter);
    }
    console.log(letterArray);
}


Word.prototype.returnString = function() {
    for (i = 0; i < letterArray.length; i++) {
        letterArray[i].checkGuess(input);
        console.log(letterArray[i].display())
    }
}


var hello = new Word("hello", letterArray);


hello.fillArray();


hello.returnString();
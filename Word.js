var LetterObject = require("./letter.js")


var Word = function() {
    this.string;
    this.letterArray = [];
}

Word.prototype.returnString = function() {
    console.log(this.string);

}





Word.prototype.pushLetters = function() {
    for (i = 0; i < this.string.length; i++) {
        var letter = new LetterObject(); 
        this.letterArray.push(letter);
    }
    console.log(this.letterArray);
}

Word.prototype.returnState = function() {
    for (i = 0; i , letterArray.length; i++) {
        console.log()
    }
}

var hello = new Word();

hello.string = "hello"


hello.returnString();
hello.pushLetters();


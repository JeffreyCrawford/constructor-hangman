var letter = require("./letter.js")


var Word = function() {
    this.string;
    this.letters = [];
}

Word.prototype.returnString = function() {
    console.log(this.string);

}

Word.prototype.pushLetters = function() {
    for (i = 0; i < this.string.length; i++) {
        var letter = new letter(letter.Letter.character); 
        letter.character = this.string[i];
        this.letters.push(letter)
    }
    console.log(this.letters);
}


var hello = new Word();

hello.string = "hello"


hello.returnString();
hello.pushLetters();



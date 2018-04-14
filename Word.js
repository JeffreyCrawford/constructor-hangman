var Letter = require("./letter.js")

var selectedWord = "string";

var Word = function(selectedWord) {
    this.string = selectedWord;
    this.letterArray = [];
}

Word.prototype.fillArray = function(selectedWord) {
    for (i = 0; i < this.string.length; i++) {
        var letter = new Letter(); 
        letter.character = this.string[i];
        this.letterArray.push(letter);
        
    }
    console.log(this.letterArray);
}

var word = new Word(selectedWord);





word.fillArray(selectedWord);
console.log(word)

word.letterArray.forEach(function(letter) {
    letter.guess();
})
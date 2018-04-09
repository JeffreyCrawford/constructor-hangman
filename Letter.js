var input = process.argv[2]

var wordArray = [];

var Letter = function() {
    character: "string";
    guessedYet: false;
}


Letter.prototype.returnCharacter = function() {
    if(guessedYet) {
        return this.character
    }
    else {
        return "_"
    }
}


Letter.prototype.checkGuess = function() {
    if(input === this.character) {
        this.guessedYet = true;

    }
    else {

    }
}


var printState = function() {
    console.log(wordArray)
}
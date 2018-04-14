var LetterObject = function() {
    this.character;
    this.guessedYet = false;
    this.display = function() {
        if(this.guessedYet) {
            return (this.character)
        }
        else {
            return ("_")
        }
    }
}

LetterObject.prototype.returnCharacter = function() {
    if(this.guessedYet) {
        return (this.character)
    }
    else {
        return ("_")
    }
}

LetterObject.prototype.checkGuess = function() {
    if(input === this.character) {
        this.guessedYet = true;

    }
    else {

    }
}

var printState = function() {
    console.log("print state")
}


module.exports = LetterObject;





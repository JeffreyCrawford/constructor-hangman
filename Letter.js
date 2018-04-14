var Letter = function(character) {
    this.character = character;
    this.guessedYet = false;
};




/* IF THE LETTER HAS BEEN GUESSED, DISPLAY IT, OTHERWISE DISPLAY _ */
Letter.prototype.toString = function() {
    if (this.guessedYet) {
        return this.character
    }
    else {
        return "_"
    }
}


/* IF INPUT MATCHES CHARACTER VALUE, CHANGE GUESSEDYET TO TRUE */
Letter.prototype.checkGuess = function(input) {
    if (input === this.character) {
        this.guessedYet = true;
    }
}


/* var test = new Letter("g");
test.checkGuess(input);
test.display();
console.log(test);
console.log(test.display()); */

module.exports = Letter;






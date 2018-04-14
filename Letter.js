var input = process.argv[2];

var Letter = function(character) {
    this.character = character;
    this.guessedYet = false;
    this.display = "_";
};


Letter.prototype.guess = function() {
    if (input === this.character) {
        console.log("CORRECT");
        this.guessedYet = true;
        this.display = this.character;
    }
    else {
        console.log("INCORRECT")
    }
};



/* var b = new Letter("b");
b.guess();
console.log(b); */



module.exports = Letter;





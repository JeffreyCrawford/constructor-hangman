

var Word = function() {
    this.string = "";
    this.letters = []
}

Word.prototype.returnString = function() {
    console.log(this.letters);
    console.log(this.string);
}


var hello = new Word();

hello.string = "hello"


hello.returnString();



var inquirer = require("inquirer");
var word = require("./word.js");

var guess = function() {
    count = 0;
    inquirer.prompt([
        {
            name: "guess",
            message: "Guess a letter!"
        }
    ]).then(function(guess) {
        console.log(guess.name)
        if (word.includes(guess.name)) {
            
        }
        else {

        }
        count++
    })
}
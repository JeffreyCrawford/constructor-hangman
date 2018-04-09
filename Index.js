var inquirer = require("inquirer")

var test = function() {
    inquirer.prompt([
        {
            name: "name",
            message: "What's your name?"
        }
    ]).then(function(answer) {
        console.log(answer.name)
    })
}
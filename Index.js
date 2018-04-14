/* EXTERNAL DOCUMENT VARIABLES */
var Word = require("./word.js");
var Letter = require("./letter.js");
var inquirer = require("inquirer");


/* WORDLIST VARIABLES */
var wordList = ["astrophysics", "astronomy", "atom", "beaker", "biochemistry", "biology", "botany", "cell", "chemical", "chemistry", "climate", "climatologist", "control", "cuvette", "data", "datum", "electricity", "electrochemist", "element", "energy", "entomology", "evolution", "experiment", "fact", "flask", "fossil", "funnel", "genetics", "geology", "geophysics", "glassware", "gravity", "herpetology", "hypothesis", "ichthyology", "immunology", "lab", "laboratory", "laws", "lepidoptery", "magnetism", "mass", "matter", "measure", "meteorologist", "meteorology", "microbiologist", "microbiology", "microscope", "mineral", "mineralogy", "molecule", "motion", "observe", "observatory", "organism", "ornithology", "paleontology", "particle", "phase", "physics", "pipette", "radiology", "research", "retort", "scale", "science", "scientist", "seismology", "telescope", "temperature", "theory", "thermometer", "tissue", "variable", "virologist", "volcanology", "volume", "weather", "weigh", "zoology"];
var wordSelection = function() {
    return wordList[Math.floor(Math.random()*wordList.length)];
}

/* NEW WORD OBJECT VARIABLES */
var text = wordSelection().toString();
var letterArray = [];

var newWord = new Word(text, letterArray);


/* CYCLES THROUGH THE SELECTED WORD STRING AND GENERATES AN ARRAY OF LETTER OBJECTS */
var fillArray = function() {
    for (i = 0; i < text.length; i++) {
        var newLetter = new Letter(text[i])
        letterArray.push(newLetter);
    }
}
fillArray();


/* INPUT VARIABLES USED IN BEGIN FUNCTION */
var input = process.argv[2];
var count = 0;


/* DISPLAYS INITIAL _ STRING */



var reset = function() {
    count = 0;
    letterArray = [];
    text = wordSelection().toString();
    newWord = new Word(text, letterArray);
    fillArray();
    newWord.returnString();
    begin();
}

var checkProgress = function() {
    if (newWord.text === newWord.letterArray.join("")) {
        console.log("YOU WIN")
        playAgain();
    }
    else {
        begin();
    }
}

var playAgain = function() {
    inquirer.prompt([
        {
        name: "restart",
        type: "confirm",
        message: "Play Again?"
        }
    ]).then(function(input) {
        if (input.restart) {
            reset();
        }
        else {
            console.log("GAME OVER")
        }
    })
}

/* PROMPTS THE USER TO GUESS A LETTER */
var begin = function() {
    if (count < 30) {
        inquirer.prompt([
            {
            name: "guess",
            message: "Guess a letter!"
            }
        ]).then(function(input) {
            /* IF THE WORD INCLUDES THE GUESS, LOG CORRECT AND CHECK IF THEY'VE WON */
            if (newWord.text.includes(input.guess.toLowerCase())) {
                console.log("\n");
                console.log("CORRECT!");
                
            }
            /* IF THE WORD DOES NOT INCLUDE THE GUESS, LOG WRONG AND ADD TO THE MISS COUNT */
            else {
                console.log("\n");
                console.log("WRONG!");
                count++;
                console.log("\n");
                console.log(10 - count + " guesses remaining!");
            }
            console.log("\n");
            newWord.returnString(input.guess.toLowerCase());
            checkProgress();
            
            
        })
    }
    else {
        console.log("\n");
        console.log("YOU LOSE!");
        wordSelection();
        playAgain();
    }
}




reset();


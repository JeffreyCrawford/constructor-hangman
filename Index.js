var Word = require("./word.js");
var Letter = require("./letter.js");
var inquirer = require("inquirer");

var input = process.argv[2];

var wordList = ["astrophysics", "astronomy", "atom", "beaker", "biochemistry", "biology", "botany", "cell", "chemical", "chemistry", "climate", "climatologist", "control", "cuvette", "data", "datum", "electricity", "electrochemist", "element", "energy", "entomology", "evolution", "experiment", "fact", "flask", "fossil", "funnel", "genetics", "geology", "geophysics", "glassware", "gravity", "herpetology", "hypothesis", "ichthyology", "immunology", "lab", "laboratory", "laws", "lepidoptery", "magnetism", "mass", "matter", "measure", "meteorologist", "meteorology", "microbiologist", "microbiology", "microscope", "mineral", "mineralogy", "molecule", "motion", "observe", "observatory", "organism", "ornithology", "paleontology", "particle", "phase", "physics", "pipette", "radiology", "research", "retort", "scale", "science", "scientist", "seismology", "telescope", "temperature", "theory", "thermometer", "tissue", "variable", "virologist", "volcanology", "volume", "weather", "weigh", "zoology"];
var wordSelection = wordList[Math.floor(Math.random()*wordList.length)];

var count = 0;


var text = wordSelection.toString();
var letterArray = [];


var fillArray = function() {
    for (i = 0; i < text.length; i++) {
        var newLetter = new Letter(text[i])
        letterArray.push(newLetter);
    }
}



fillArray();

var newWord = new Word(text, letterArray)

console.log(newWord.text)
newWord.returnString();



var begin = function() {
    if (count < 3) {
        inquirer.prompt([
            {
            name: "guess",
            message: "Guess a letter!"
            }
        ]).then(function(input) {
             
            if (newWord.text.includes(input.guess)) {
                console.log("\n");
                console.log("CORRECT!")
            }
            else {
                console.log("\n");
                console.log("WRONG!")
                count++;
            }
            console.log("\n");
            newWord.returnString(input.guess);
             
            begin();
            
        })
    }
    else {
        console.log("YOU LOSE!")
    }
}

begin();

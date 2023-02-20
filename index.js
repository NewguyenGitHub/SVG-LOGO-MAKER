// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const lib = require("lib");
const shapes = require("./lib/shapes");

// Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters."
    },
    {
        type: "input",
        name: "text-color",
        message: "Enter text color.",
    },
    {
        type: "list",
        name: "shape",
        message: "Select shape.",
        choices: [
            "circle",
            "triangle",
            "square",
        ],
    },
    {
        type: "input",
        name: "shape-color",
        message: "Enter shape color.",
    },
];


// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
            return console.log("There is an error: " + error);
        }
    });
};

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log("Create SVG logo file");
        writeToFile("./examples/logo.svg",shapes({...response}));
    });
};

// Function call to initialize app
init();
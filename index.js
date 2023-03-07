// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
const generateSVG = require("./utils/generateSVG.js");
const generateShape = require('./lib/generateShape.js');

// Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters."
    },
    {
        type: "input",
        name: "textColor",
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
        name: "shapeColor",
        message: "Enter shape color.",
    },
];


// Create a function to write file
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
        
        // Path to save logo file
        const path = "./dist/logo.svg";

        // Function to generate shape from user input
        const shape = generateShape (response);

        // Write file to path after generating file from user input
        console.log("Create SVG logo file");
        writeToFile(path, generateSVG(shape));
    });
};

// Function call to initialize app
init();
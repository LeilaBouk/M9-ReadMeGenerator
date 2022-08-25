// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {

    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter project name.',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Enter project description.',
            name: 'desc',
        },
        {
            type: 'input',
            message: 'Enter installation instructions.',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Enter usage information.',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Enter test instructions.',
            name: 'name',
        },
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const gen = require('./utils/generateMarkdown');

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
            name: 'install',
        },
        {
            type: 'input',
            message: 'Enter usage information.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Enter test instructions.',
            name: 'test',
        },
        {
            type: 'list',
            message: 'Choose a license',
            name: 'license',
            choices: ['Unlicensed', 'Public domain', 'MIT license', 'Mozilla Public License 2.0', 'Copyleft']
        },
        {
            type: 'input',
            message: 'Enter your Github username.',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Enter your email.',
            name: 'email',
        },
        {
            type: 'list',
            message: 'Choose one to represent you.',
            name: 'emoji',
            choices: ['💻', '🧸', '🗿', '🍕', '🌷', '🦕', '😎']
        },
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

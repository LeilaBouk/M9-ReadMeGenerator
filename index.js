// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {

    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter project name.',
            name: 'title',
            validate: name => {
                if (name) {
                    return true;
                }
                else {
                    console.log("Please enter a project name...");
                    return false;
                }
            }
        },

        {
            type: 'input',
            message: 'Enter project description.',
            name: 'desc',
            validate: name => {
                if (name) {
                    return true;
                }
                else {
                    console.log("You must have a description");
                    return false;
                }
            }
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
            message: 'Enter contribution guidelines.',
            name: 'contribute',
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
            choices: ['Unlicense', 'Hippocratic_3.0', 'MIT', 'MPL_2.0', 'PDDL', 'Apache_2.0', 'None']
        },
        {
            type: 'input',
            message: 'Enter your Github username.',
            name: 'github',
            validate: name => {
                if (name) {
                    return true;
                }
                else {
                    console.log("Please enter your github username");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Enter your email.',
            name: 'email',
            validate: email => {

               validEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);

                if (validEmail) {
                    return true;
                }
                else {
                    console.log("Please enter a valid email");
                    return false;
                }
            }
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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err)
        throw err;
        console.log("ReadMe Generated")
    })
}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then(function (inputs) {
        console.log(inputs)
        writeToFile("./RM/README.md", generateMarkdown(inputs));
    })
 
}

// Function call to initialize app
init();

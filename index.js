// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        //now begins questions
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of this project? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter the title!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'description',
            message: 'What does this do? (Required)',
            validate: discriptionInput => {
              if (discriptionInput) {
                return true;
              } else {
                console.log('Please describe your project!');
                return false;
              }
            }
          },
          {
            type: 'confirm',
            name: 'reqInstall',
            message: 'Does this require things to be installed?',
            default: true
          },
          {
            type: 'input',
            name: 'require',
            message: 'what does it require?',
            when: ({ reqInstall }) => reqInstall
          },
          {
            type: 'checkbox',
            name: 'languages',
            message: 'What languages does it use?',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
          {
            type: 'input',
            name: 'github',
            message: 'What is your github repo located? (Required)',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter your github name!');
                return false;
              }
            }
          },
          {
            type: 'list',
            name: 'license',
            message: 'What license do you use?',
            choices: ['MIT','Mozilla','IBM']

          }
    ]).then(response => {
      fs.writeFile("README.md", generateMarkdown(response), err => {
        if(err) throw err
      })
    })
    

}

// TODO: Create a function to write README file\
promptUser()

//    .then()
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

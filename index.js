// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input


const promptUser = () => {
    return inquirer.prompt([
        //now begins questions
        {//TITLE question
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
          {//Description question
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
            type:'input',
            name:'usage',
            message: 'How is this used?(Required)',
            validate: usageInput => {
              if (usageInput) {
                return true;
              } else {
                console.log('Please tell us how to use your project!');
                return false;
              }
            }

          },
          // {// Install Requirements question
          //   type: 'confirm',
          //   name: 'reqInstall',
          //   message: 'Does this require things to be installed?',
          //   default: true
            
          // },
          {
            type: 'input',
            name: 'require',
            message: 'What does this require to install?',
            // when: ({ reqInstall }) => reqInstall
          },
          {// Languages questions
            type: 'checkbox',
            name: 'languages',
            message: 'What languages does it use?',
            choices: ['JavaScript ', 'HTML ', 'CSS ', 'ES6 ', 'jQuery ', 'Bootstrap ', 'Node ']
          },
          {//   Git hub  name question
            type: 'input',
            name: 'github',
            message: 'What is your github name? (Required)',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter your github name!');
                return false;
              }
            }
          },
          {  // Repo name Question
            type:'input',
            name:'repo',
            message: 'What is the Repo name?(Required)',
            validate: repoInput => {
              if (repoInput) {
                return true;
              } else {
                console.log('Please enter your repo name!');
                return false;
              }
            }
          },
          {
            type:'input',
            name:'email',
            message:'Where is an email you can be reached if anyone has questions?(Required)',
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter your email!');
                return false;
              }
            }

          },
          {
            type:'confirm',
            name:'qLicense',
            message:'Does this need a license?',
            default:false
          },
          { // License question
            type: 'list',
            name: 'license',
            message: 'What license do you use?',
            choices: ['MIT','Mozilla','IBM'],
            when: ({qLicense})=>qLicense

          },
          {
            type:'confirm',
            name:'contribute',
            message: "Would you like to give anyone a reference for contribution"

          },
          { 
            type: 'input',
            name: 'contributeName',
            message:'What is the github name?(Required)',
            when: ({contribute})=> contribute,
            validate:contributeInput => {
              if (contributeInput){
                return true;
                }else{
                    console.log('please enter the github name');
                    return false;
                }
                }
            },
            {
              type:'input',
              name:'test',
              message:'What are the test instructions?(Required)',
              validate:testInput => {
                if (testInput){
                  return true;
                  }else{
                      console.log('enter none if you dont have any');
                      return false;
                  }
                  }
            },
            

            
          
    ]).then(response => {
      fs.writeFile("README.md", generateMarkdown(response), err => {
        if(err) throw err
      })
    })
    

}

// TODO: Create a function to write README file\
promptUser()
 
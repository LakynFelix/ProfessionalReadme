// TODO: Include packages needed for this application

const fs = require("fs");
const { writeFile, copyFile } = require("./utils/generateMarkdown,js");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions  = () => {
    return inquirer.prompt([
    [{
        type: 'input',
        name: 'name',
        message: 'What is the Title of your Readme? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a name for your Readme!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a Description of your project! - include What problem does it solve? What did you learn? and What makes your project stand out? (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You did not enter a valid project description! (Required)');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a Table of Contents',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You did not enter a table of contents (Required)');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What Coding languages did you use in this project? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Please Enter their GitHub link',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a project GitHub link!');
            return false;
          }
        }
      },
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a project name!');
            return false;
          }
        }
      },
      
      
      {
        type: 'input',
        name: 'link',
        message: 'Please enter the GitHub link to your project. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a project GitHub link! (Required)');
            return false;
          }
        }
      },

      {
        type: 'input',
        name: 'link',
        message: 'Please enter your email address (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need enter a email address (Required)');
            return false;
          }
        }
      },
      {   
        
        name: 'languages',
        message: 'What Coding languages did you use in this project? (Check all that apply)',
        
        
        type: 'checkbox',
        message: "What licenses are required with this project?",
        name: "licenses"
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
      {
        type: 'input',
        name: 'name',
        message: 'Did you collaborate with any one on this project?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a name!');
            return false;
          }
        }
      },
    ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile (Readme.md,data,)
}

// TODO: Create a function to initialize app 
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponse, data) => {   
        console.log("Making  a new ReadMe.md");
        fs.writeFileSync("ReadMe.md", inquirerResponse, data);
    })
    .catch((err) => {
        console.log(err);
    })
}

// Function call to initialize app
init();

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });
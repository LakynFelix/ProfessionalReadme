// TODO: Include packages needed for this application

const fs = require("fs");
const markdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the Title of your Readme? (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("You need to enter a name for your Readme!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a Table of Contents",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("You did not enter a table of contents (Required)");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "nameproject",
    message: "What is the name of your Project? (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("You need to enter a Project name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "descriptionofproject",
    message:
      "Please enter a Description of your project! - include What problem does it solve? What did you learn? and What makes your project stand out? (Required)",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log(
          "You did not enter a valid project description! (Required)"
        );
        return false;
      }
    },
  },
  {
    type: "checkbox",
    name: "languages",
    message:
      "What Coding languages did you use in this project? (Check all that apply)",
    choices: [
      "JavaScript",
      "HTML",
      "CSS",
      "ES6",
      "jQuery",
      "Bootstrap",
      "Node",
    ],
  },

  {
    type: "input",
    name: "linkprofile",
    message: "Please Enter your GitHub Profile link",
    validate: (linkInput) => {
      if (linkInput) {
        return true;
      } else {
        console.log("You need to enter a  GitHub Profile link!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "link",
    message: "Please enter the GitHub link to your project. (Required)",
    validate: (linkInput) => {
      if (linkInput) {
        return true;
      } else {
        console.log("You need to enter a project GitHub link! (Required)");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "linkphoto",
    message: "Please enter the url for your image (Required)",
    validate: (linkInput) => {
      if (linkInput) {
        return true;
      } else {
        console.log("You need enter a valid URL (Required)");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "linkemail",
    message: "Please enter your email address (Required)",
    validate: (linkInput) => {
      if (linkInput) {
        return true;
      } else {
        console.log("You need enter a email address (Required)");
        return false;
      }
    },
  },
  {
    type: "checkbox",
    message: "What licenses are required with this project?",
    name: "licenses",
    choices: ["ISC", "MIT ", "APASHE", "BSD", "NONE"],
  },
  {
    type: "input",
    name: "collaborators",
    message: "Did you collaborate with any one on this project?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("You need to enter a name!");
        return false;
      }
    },
  },
];
// TODO: Create a function to write README file
const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./utils/Readme.md", fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "Readme was Created Successfully!",
      });
    });
  });
};

// TODO: Create a function to initialize app

function init() {
  inquirer
    .prompt(questions)
    .then((inquirerResponse) => {
      const response = markdown(inquirerResponse);
      console.log("Creating a new ReadMe.md");
      console.log(response);
      fs.writeFileSync("ReadMe.md", response);
    })
    .catch((err) => {
      console.log(err);
    });
}
// Function call to initialize app
init();

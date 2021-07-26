// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license == "MIT") {
    return (
      "MIT License" +
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    );
  }

  if (license == "ISC") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  }

  if (license == "BSD") {
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  }
  if (license == "APASHE") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (license === "NONE") {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
function generateLicenseSection(license) {
  return `/n ##licenses: ${response.licenses}`;
}
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "NONE") {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  renderLicenseBadge(response.licenses);
  return `# ${response.title}
## Table of Contents 
* [Description](#descriptionofproject)  
* [Usage](#languages)  
* [Project](#nameofproject)    
* [Licenses](#licenses)   
* [Collaborators](#collaborators)   
 

## ${response.title} 

 
## Description: 
${response.descriptionofproject}   

## Usage: 
  ${response.languages}   


##  ${response.nameproject} 
##  GitHub Profile: ${response.linkprofile}   
##  GitHub REPO: ${response.link}  
## EMAIL: ${response.linkemail} 

## Preview of project
${response.linkphoto}

## License:  
${renderLicenseBadge(response.licenses)}
  
 ## Collaborators:
 ${response.collaborators}   
`;
}

module.exports = generateMarkdown;

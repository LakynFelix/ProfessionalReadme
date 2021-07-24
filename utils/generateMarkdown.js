// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "MIT License" + '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

    
  }

  if (license === "ISC") {
    return "ISC License" + '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  }

  if (license === "BSD") {
    return "BSD license" + '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  }
  if (license === "APASHE") {
    return "APASHE" + '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  if (license === "None") {
    return "";
  }
}


// TODO: Create a function that returns the license section of README
function generateLicenseSection(license) {
  return `# ##licenses: ${response.licenses}`;
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return "";
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

# Table of Content 
[descriptionofproject](#descriptionofproject)  
[languages](#languages)  
[nameofproject](#nameofproject)  
[linkprofile](#linkprofile)  
[link](#link)  
[linkphoto](#linkphoto)  
[linkemail](#linkemail)  
[licenses](#licenses)   
[contributors](#contributors)   

 ##title:    
${response.title}

##description: ${response.description}   

 ##descriptionofproject: ${response.descriptionofproject}   
##languages: ${response.languages}   

##nameproject: ${response.nameproject} 

##linkprofile: ${response.linkprofile}   

##link: ${response.link} 

##linkphoto: ${response.linkphoto}   

##linkemail: ${response.linkemail}  
 ##licenses: ${renderLicenseBadge(response.licenses)}  

##collaborators: ${response.collaborators}   
`;
}

module.exports = generateMarkdown;

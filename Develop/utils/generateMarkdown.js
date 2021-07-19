// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license)  {
  if (license) {
    return `#license,
    ${license}`
    else {
      return ''
    };
}

// TODO: Create a function to generate markdown for README 
function generateMarkdown(response) {
  return `# ${response.title}

# Table of Content
-[description](#description)
-[descriptionofproject](#descriptionofproject)
-[languages](#languages)
-[nameofproject](#nameofproject)
-[linkprofile](#linkprofile)
-[link](#link)
-[linkemail](#linkemail)
-[licenses](#licenses) 
-[contributors](#contributors)



${response.description} ##description:    

${response.descriptionofproject} ##descriptionofproject:

${response.languages} ##languages:

${response.nameproject} ##nameproject:

${response.linkprofile} ##linkprofile:

${response.link} ##link:

    ${response.linkemail}
##linkemail:

${response.licenses} ##licenses:  
${response.collaborators} ##collaborators:
`;
}

module.exports = generateMarkdown;

// :trophy: 
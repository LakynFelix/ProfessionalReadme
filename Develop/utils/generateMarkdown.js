// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const badge = 'Badge';
const license = "licence"


function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return ('MIT License' + 'Badge');}

    if (license === 'ISC') {
      return('ISC License' + 'Badge');}
      
      if(license === 'BSD') {
        return('BSD license' + 'Badge');
      }
      if(license === 'GPL') {
        return('GPL' + 'Badge');
      }
      if(license === 'None') {
        return('')
      }
      
    }



// TODO: Create a function that returns the license section of README
function generateLicenseSection(license) {
  return `# ##licenses: ${response.licenses}` 
  }


// If there is no license, return an empty string
function renderLicenseSection(license)  {
  if (license) {
    return `#license + badge: ${license}`
    else {
    return "";
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
-[linkphoto](#linkphoto)
-[linkemail](#linkemail)
-[licenses](#licenses) 
-[contributors](#contributors)


${response.title} ##title:    
${response.description} ##description:    

${response.descriptionofproject} ##descriptionofproject:

${response.languages} ##languages:

${response.nameproject} ##nameproject:

${response.linkprofile} ##linkprofile:

${response.link} ##link:

${response.linkphoto} ##linkphoto:

${response.linkemail}##linkemail:

${response.licenses} ##licenses:  
${response.collaborators} ##collaborators:
`;
}

module.exports = generateMarkdown;

// :trophy: 
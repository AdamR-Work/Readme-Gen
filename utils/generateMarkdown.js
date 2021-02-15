// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)`
  }else if(license == "IBM") {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  }else if (license == "Mozilla"){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  else {
    return `No License Provided`
  }
  
}


// Function to put Installer question into a string
function genInstaller(require){
  if (true){
    return '>'+require; 
  }
}
// Function to display Test section into a string 
function testInstaller(test){
  if (true){
    return '>'+test; 
  }
}
// Function to put people you want to Credit into a github link
function giveCredit(creditNames){
  if (creditNames==true){
    return "https://github.com/"+creditNames;
  }else{ return '';
  }
  
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseString = renderLicenseBadge(data.license)
  let installerString = genInstaller(data.require)
  let contributeString = giveCredit(data.contributeName)
  let testString= testInstaller(data.test)


  return `# ${data.title}

## License

${licenseString}

## Table of Contents

 * [Installation](#installation)
 * [Usage](#usage)
 * [Credits](#credits)
 * [License](#license)
 
## Description

${data.description}

<img src="demo.jpg">

## Usage

${data.usage}

## Installation

${installerString}

## Languages

${data.languages}

## Questions

### ${data.github}

https://github.com/${data.github}/${data.repo}

## Contributing

${contributeString}

## Tests

${testString}

## Credits

`;
}

module.exports = generateMarkdown;

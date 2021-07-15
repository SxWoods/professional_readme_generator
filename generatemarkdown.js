// Creates a function that will returns a license badge based on the license that was passed through. If there isn't a license, will return a empty string
function renderLicenseBadge(license) {
    if (license !== 'None') {
      return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return '';
  }
  
  // Creates a function that will return a license link. If there isn't a license, will return a empty string
  function renderLicenseLink(license) {
    if (license !== 'None') {
      return `\n* [License](#license)\n`;
    }
    return '';
  }
  
  // Creates a function that will return a license section of README. If there isn't a license, will return a empty string
  function renderLicenseSection(license) {
    if (license !== 'None') {
      return `## License
  
  This project is licensed under the ${license} license.`;
    }
    return '';
  }
  
  // Creates a function to generate a markdown for the README
  function generateMarkdown(data) {
    return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents 
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Installation
  
  To install dependencies, run the following command:
  
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage
  
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
    
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  To run test, run the following command:
  
  \`\`\`
  ${data.test}
  \`\`\`
  
  ## Questions
  
  If you have any questions about the repo, open an issue or contact me directly at ${
      data.email
    }. You can find more of my work at [${data.github}](https://github.com/${
      data.github
    }/).
  
  `;
  }
  
  module.exports = generateMarkdown;
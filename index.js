const inquirer = require('inquirer');
const fs = require('fs')

function generateREADME ({title, description, installation, usage, credits, license, features, contributing, tests, github, email}) {
     
    const myBadge = myLicense(license);




    return `# ${title}

${myBadge}

## Description
    
    ${description}

## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Contribute](#contribute)
- [Test](#tests)
- [Questions](#questions)
    
## Installation
    
    ${installation}

 ## Usage

    ${usage}

## Credits

    ${credits}
    
## License

    This project is coverd under the ${license} license.
    
## Features

    ${features}
    
## Contribute

    ${contributing}
    
## Tests

    ${tests}

## Questions

    https://github.com/${github}

    You can also reach me through my email at ${email} for any questions.

    `
    
}

function myLicense(license) {
    console.log("ismylicence", license);
   let badge = '';

   switch (license) {
    case 'MIT':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
      break;
    case 'ISC':
      badge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]';
      break;
    case 'none':
        break;
        case 'Mozilla Public License 2.0':
      badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]';
      break;
  }
  return badge
}


inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of the project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please provide a short description of the project',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Is there any steps require to install your project?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What is the usage of this application?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Is there any collaborator on your project?',
            name: 'credits',
        },
        {
            type: 'list',
            message: 'Please choose your license?',
            name: 'license',
            choices: ['MIT', 'ISC', 'none', 'Mozilla Public License 2.0']
        },
        {
            type: 'input',
            message: 'Is there any additional feature you would like to include?',
            name: 'features',
        },
        {
            type: 'input',
            message: 'Would you like to include any guidelines for contributions?',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Please input the test for your you would like to add to the application?',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'what is your github username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'what is your email?',
            name: 'email',
        },
    ])
    .then((data) => {
        const myReadme = generateREADME(data);
        console.log(myReadme);
        fs.writeFile('README.md', myReadme, (err) =>
        err ? console.log(err) : console.log('success!')
        );
       
    }); 


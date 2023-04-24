const inquirer = require('inquirer');


const dep = [
    {
        name: 'AddDepartment',
        message: 'Please enter the name of the new department',
        type: 'input',
    },   
]

const fileGenerator = (answersObject) => {
    return `
${answersObject.AddDepartment}

    `;
  };

function department() {
    inquirer.prompt(dep)
    .then(answers => {
        console.log(answers);
    });
}

// // Function call to initialize app


department();

module.exports = department;
const inquirerDep = require('inquirer');


const dep = [
    {
        name: 'AddDepartment',
        message: 'Please enter the name of the new department',
        type: 'input',
    },   
]

const departmentGenerator = (answersObject) => {
    return `
${answersObject.AddDepartment}

    `;
  };

function newDepartment() {
    inquirerDep.prompt(dep)
    .then(answers => {
        console.log(answers);
    });
}

// // Function call to initialize app


newDepartment();

module.exports = department;
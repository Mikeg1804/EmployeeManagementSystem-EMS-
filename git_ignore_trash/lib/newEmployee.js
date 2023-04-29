const inquirerEmployee = require('inquirer');


const employee = [
    {
        name: 'FirstName',
        message: 'Please enter the firstname of the employee',
        type: 'input',
    },
    {
        name: 'LastName',
        message: 'Please enter the lastname of the employee',
        type: 'input',
    },
]

const departmentGenerator = (answersObject) => {
    return `
${answersObject.FirstName},
${answersObject.LastName}
    `;
  };

function newEmployee () {
    inquirerEmployee.prompt(employee)
    .then(answers => {
        console.log(answers);
    });
}

// // Function call to initialize app


newEmployee();

module.exports = newEmployee;
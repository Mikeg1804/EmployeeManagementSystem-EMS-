const inquirerRole = require('inquirer');


const role = [
    {
        name: 'AddRole',
        message: 'Please enter the role of the employee',
        type: 'input',
    },  
]

const roleGenerator = (answersObject) => {
    return `
${answersObject.AddRole}

    `;
  };

function newRole() {
    inquirerRole.prompt(role)
    .then(answers => {
        console.log(answers);
    });
}



newRole();

module.exports = newRole;


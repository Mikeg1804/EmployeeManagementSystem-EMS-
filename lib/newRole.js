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

// // Function call to initialize app


newRole();

module.exports = newRole;

// node ./lib/newRole
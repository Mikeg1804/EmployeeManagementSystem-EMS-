const inquirer = require('inquirer');

const fs = require('fs');


const department = require('./lib/newDepartment');
const employee = require('./lib/newEmployee');
const role = require('./lib/newRole');
const salary = require('./lib/newSalary');


const x = [
    {
        name: 'ViewOptions',
        message: 'View Options:',
        type: 'list',
        choices: [
          'View all department',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Add a salary',
        ]
    }, 

    // // here I need to be able to enter multiple things inlcuding: names, salary, department for the role.

    // // here I need to be able to enter multiple things inlcuding: firname, lastname, role and manager.
    // {
    //     name: 'AddEmployee',
    //     message: 'Please enter the name of the employee',
    //     type: 'input',
    // },    
    // {
    //     name: 'updateEmployees',
    //     message: 'Chose Employee whose information needs to be updated:',
    //     type: 'list',
    //     // I need for this list to be dinamic.
    //     choices: [
    //       '',
    //     ]
    // },    
]

const fileGenerator = (answersObject) => {
    return `
${answersObject.ViewOptions}

    `;
  };

function init() {
    inquirer.prompt(x)
    .then(answers => {
        console.log(answers);
        let option 
        switch (answers.choices) {
          case 'View all department':
            option = new ViewDepartment()
            break;
          case 'View all roles':
            option = new ViewAllRoles()
            break;
          case 'View all employees':
            option = new ViewAllEmployees()
            break;
          case 'Add a department':
            option = new newDepartment()
            break;
          case 'Add a role':
            option = new newRole()
            break; 
          case 'Add an employee':
            option = new newEmployee()
            break;
          case 'Add a salary':
            option = new newSalary()
            break;            
          default:
            break;
        }

        // writeToFile('seeds.sql', fileGenerator(answers));
        
            console.log('success');
          });
}

// // Function call to initialize app
init();


function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
};

module.exports = writeToFile;




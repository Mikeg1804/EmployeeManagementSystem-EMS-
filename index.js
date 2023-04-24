const inquirer = require('inquirer');

const fs = require('fs');

const {Options} = require('./lib');
const department = require('./lib/index');

// const {Square} = require('./Lib/shapes');

// const {Circle} = require('./Lib/shapes');


// const Svg = require ('./Lib/svg');

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
          'Update an employee role',
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
          // case 'View all department':
          //   option = new ViewDepartment()
          //   break;
          // case 'View all roles':
          //   option = new ViewAllRoles()
          //   break;
          // case 'View all employees':
          //   option = new ViewAllEmployees()
          //   break;
          case 'Add a department':
            option = new department()
            break;
          // case 'Add a role':
          //   option = new AddaRole()
          //   break; 
          // case 'Add an employee':
          //   option = new AddanEmployee()
          //   break;
          // case 'Update an employee role':
          //   option = new updateanemployeerole()
          //   break;
          default:
            break;
        }
    //   const svg = new Svg()
    //   svg.setText(answers.LogoName,answers.TextColor)  
    //   svg.setShape(shape)  
        // writeToFile('LOGO.svg', svg.build())
        
        //     console.log('success');
          });
}

// // Function call to initialize app
init();


// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}






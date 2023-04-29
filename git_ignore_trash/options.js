const inquirer = require('inquirer');

class Options {
    constructor(){
        this.newDepartment =
    //      [
    // {
    //     name: 'AddDepartment',
    //     message: 'Please enter the name of the new department',
    //     type: 'input',
    // },
    //      ]
        this.addaRole = [
    {
        name: 'EmployeeName',
        message: 'Please enter the name of the employee',
        type: 'input',
    },
    {
        name: 'EmployeeSalary',
        message: 'Please enter the salary of the employee',
        type: 'input',
    },

    // shouldn't those pull from the list of departments and list of roles already entered from the add department and add a role section? 
    {
        name: 'Department',
        message: 'Please enter the Department for the employee',
        type: 'input',
    },
    {
        name: 'AddRole',
        message: 'Please enter the role of the employee',
        type: 'input',
    },   
        ]

    }
}
//need help with updating employees and their new roles.

const answerGenerater = (answersObject) => {
    return `
${answersObject.AddDepartment}

    `;
  };

function init() {
    inquirer.prompt(options)
    .then(answers => {
        console.log(answers);
        // let option 
        // switch (answers) {
        //   case 'AddDepartment':
        //     option = new ViewDepartment()
        //     break;
        //   case 'View all roles':
        //     option = new ViewAllRoles()
        //     break;
        //   case 'View all employees':
        //     option = new ViewAllEmployees()
        //     break;
        //   case 'Add a department':
        //     option = new AddDepartment()
        //     break;
        //   case 'Add a role':
        //     option = new AddaRole()
        //     break; 
        //   case 'Add an employee':
        //     option = new AddanEmployee()
        //     break;
        //   case 'Update an employee role':
        //     option = new updateanemployeerole()
        //     break;
        //   default:
        //     break;
        // }
    //   const svg = new Svg()
    //   svg.setText(answers.LogoName,answers.TextColor)  
    //   svg.setShape(shape)  
        // writeToFile('LOGO.svg', svg.build())
        
        //     console.log('success');
          });
}

// // Function call to initialize app
init();

module.exports = {Options};
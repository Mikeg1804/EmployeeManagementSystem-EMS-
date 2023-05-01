const { response } = require('express');
const inquirer = require('inquirer');
const {viewDepartment, viewAllRoles, viewAllEmployees, createDepartment, addNewRole, addNewEmployee, sqlSelect} = require('./options')




const x = [
    {
        name: 'ViewOptions',
        message: 'View Options:',
        type: 'list',
        choices: [
          {
            name:'View all department',
            value:'allDepartment',
          },
          {
            name:'View all roles',
            value:'allRoles',
          },         
          {
            name:'View all employees',
            value:'allEmployee',
          },          
          {
            name:'Add a department',
            value:'newDepartment',
          },          
          {
            name:'Add a role',
            value:'newRole',
          }, 
          {
            name:'Add an employee',
            value:'newEmployee',
          }, 
          {
            name:'Update an employee role',
            value:'updateRole',
          },          
        ]
    }, 
    

];



function init() {
    inquirer.prompt(x)
    .then( async answers => {
        console.log(answers);
        switch (answers.ViewOptions) {
          case 'allDepartment':
            choice = await viewDepartment() 
            break;
          case 'allRoles':
            choice = await viewAllRoles()
            break;
          case 'allEmployee':
            choice = await viewAllEmployees() 
            break;
          case 'newDepartment':
            choice = await newDepartment() 
            break;
          case 'newRole':
            choice = await newRole()
            break; 
          case 'newEmployee':
            choice = await newEmployee()
            break;
          case 'updateRole':
            choice = await roleUpdating()
            break; 
          // default:
          //   break;
        }
        
          });
}

// // Function call to initialize app
init();


function newDepartment() {
  inquirer.prompt(
    {
        name: 'AddDepartment',
        message: 'Please enter the name of the new department',
        type: 'input',
    },  
  ).then( response => {
      console.log(response.AddDepartment);
      createDepartment([response.AddDepartment]);       
      }

  )
};


function newRole() {
  inquirer.prompt([
    {
      name: 'roleTitle',
      message: 'Please enter the tile of the new role',
      type: 'input',
    },
    {
      name: 'roleSalary',
      message: 'Please enter the salary for the new role',
      type: 'input',
    },
    {
      name: 'departmentId',
      message: 'Please enter the department ID',
      type: 'number',
    },
  ]).then( response => {
      console.log(response.roleTitle);
      console.log(response.roleSalary);
      console.log(response.departmentId);
      addNewRole([response.roleTitle,response.roleSalary,response.departmentId]);
      }
  )
};

function newEmployee() {
  inquirer.prompt([
    {
      name: 'employeeFirstname',
      message: 'Please enter the firstname of new employee',
      type: 'input',
    }, 
    {
      name: 'employeeLastname',
      message: 'Please enter the lastname of new employee',
      type: 'input',
    }, 
    {
      name: 'employeeRoleId',
      message: 'Please enter the role ID for the new employee',
      type: 'number',
    },
    {
      name: 'employeeManagerId',
      message: 'Please enter the employee ID for the manager of the new employee',
      type: 'number',
    },      
  ]).then( response => {
      console.log(response.employeeFirstname);
      console.log(response.employeeLastname);
      console.log(response.employeeRoleId);
      console.log(response.employeeManagerId);
      addNewEmployee([response.employeeFirstname,response.employeeLastname,response.employeeRoleId,response.employeeManagerId]);
      }
  )
};


// function roleUpdating() {

  // inquirer.prompt([
  //   {
  //     name: 'employeeToUpdate',
  //     message: 'Select the employee information to update.',
  //     type: 'list',
  //     when: (response) => response.action === 'updateEmployeeRole',
  //     choices: renderListOfEmployees, 
  // },
  // {
  //     name: 'roleToUpdate',
  //     message: 'Select the employee role to update.',
  //     type: 'list',
  //     when: (response) => response.employeeToUpdate,
  //     choices: renderListOfDepartments, 
//   // }     
//   ]).then( response => {
//       console.log(response.employeeToUpdate);
//       console.log(response.roleToUpdate);
//       // addNewEmployee([response.employeeFirstname,response.employeeLastname,response.employeeRoleId,response.employeeManagerId]);
//       }
//   )
// };









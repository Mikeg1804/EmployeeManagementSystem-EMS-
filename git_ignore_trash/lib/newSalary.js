const inquirerSalary = require('inquirer');


const salary = [
    {
        name: 'EmployeeSalary',
        message: 'Please enter new salary',
        type: 'input',
    }, 
]

const salaryGenerator = (answersObject) => {
    return `
${answersObject.EmployeeSalary}

    `;
  };

function newSalary() {
    inquirerSalary.prompt(salary)
    .then(answers => {
        console.log(answers);
        writeToFile('seeds.sql', fileGenerator(answers));        
    });
}

// // Function call to initialize app


newSalary();

module.exports = newRole;

// node ./lib/newSalary
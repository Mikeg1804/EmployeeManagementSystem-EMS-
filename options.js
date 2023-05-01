const connection = require('./config/connection.js');

async function viewDepartment() {
    const sql = `
        SELECT * FROM department;`;
    sqlSelect(sql);
}

async function viewAllRoles() {
    const sql = `
        SELECT r.id, r.jobtitle, r.salary, d.id as department_id
        FROM rol r
            LEFT JOIN department d on r.department_id = d.id;`;
    const result = await sqlSelect(sql);;
    return result;
}

async function viewAllEmployees() {
    const sql = `
        SELECT e.id, e.firstname, e.lastname, r.jobtitle, r.salary, d.id as department_id, coalesce(manager.firstname, "manager does") as manager_firstname, coalesce(manager.lastname, "not apply") as manager_lastname
        FROM employee e
            LEFT JOIN rol r on e.rol_id = r.id
            LEFT JOIN department d on r.department_id = d.id
            LEFT JOIN employee manager on e.manager_id = manager.id;`;
    sqlSelect(sql);
};

async function createDepartment(valuesArray) {
    const sql = `
        INSERT INTO department(departmentname)
        VALUES (?);`; 
    const log = `The new ${valuesArray} department has been added to the database successfully!`;
    await sqlInsert(sql, valuesArray, log);
};

async function addNewRole(valuesArray) {
    const sql = `
    INSERT INTO rol(jobtitle, salary, department_id)
    VALUES (?, ?, ?);`;
    const log = `The new ${valuesArray[0]} rol and assosiated salary of ${valuesArray[1]} has been added to the database successfully!`;
    await sqlInsert(sql, valuesArray, log);
}

async function addNewEmployee(valuesArray) {
    const sql = `
    INSERT INTO employee(firstname, lastname, rol_id, manager_id)
    VALUES (?, ?, ?, ?);`;
    const log = `New employee ${valuesArray[0]} ${valuesArray[1]} has been added to the "employee" database table succesfully!`;
    await sqlInsert(sql, valuesArray, log);
}



async function sqlSelect(sql) {
    try {
        const [ result ] = await connection.query(sql);
        console.table(result);
    } catch (error) {
        console.log(error);
    }
}

async function sqlInsert(sql, newValues, logInfo) {  
    try {
    await connection.query(sql, newValues);
    console.log(logInfo);
    } catch (error) {
        console.log(error);
    }
}

module.exports = { viewDepartment, viewAllRoles, viewAllEmployees, createDepartment, addNewRole, addNewEmployee, sqlSelect }
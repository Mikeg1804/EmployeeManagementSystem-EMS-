
const connection = require('../config/connection.js');

const createEmployee = async (req, res) => {

  const {firstname, lastname} = req.body;
  const {rol_id, manager_id} = req.query;
  const query = 'INSERT INTO employee (firstname, lastname, rol_id, manager_id) VALUES (?, ?, ?, ?)';
  if (!firstname || !lastname || !rol_id || !manager_id) {
    return res.status(400).json({error: 'firstname, lastname, role ID and Manager Id must be provided'});
  }
  
  try {
    const [result] = await connection.query(query, [firstname, lastname, rol_id, manager_id]);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getAllEmployees = async (req, res) => {
  
    const getAllEmployeesQuery = 'SELECT * FROM employee;';
    try {
      const [result] = await connection.query(getAllEmployeesQuery);
      res.json(result);
    } catch (error) {
      res.status(500).json({error});
    }
  };
  
  module.exports = {
    createEmployee,
    getAllEmployees,
  };


// const connection = require('../config/connection.js');


// const createEmployee = async (req, res) => {

//   const {firstname,lastname} = req.body;
//   const {rol_id, manager_id} = req.query;
//   const query = 'INSERT INTO employee (firstname, lastname, rol_id, manager_id) VALUES (?, ?, ?, ?)';
//   if (!firstname || !lastname || !rol_id || !manager_id) {
//     return res.status(400).json({error: 'firstname, lastname, role ID and Manager Id must be provided'});
//   }
  
//   try {

//     const [ result1 ] = await connection.query('INSERT INTO employee (firstname) VALUES (?);', [firstname]);
//     const [ result2 ] = await connection.query('INSERT INTO employee (lastname) VALUES (?);', [lastname]);
//     const [roles] = await connection.query('INSERT INTO employee (role) VALUES (?);', [rol_id]);
//     const [manager] = await connection.query('INSERT INTO employee (manager) VALUES (?);', [manager_id]);
//     res.json(query[0]);
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// };

// const getAllEmployees = async (req, res) => {
  
//     const getAllEmployees = 'SELECT * FROM employees ON FROM employee;';
//     try {
//       const [result] = await connection.query(getAllEmployees);
//       res.json(result);
//     } catch (error) {
//       res.status(500).json({error});
//     }
//   };
  
//   module.exports = {
//     createEmployee,
//     getAllEmployees,
//   };
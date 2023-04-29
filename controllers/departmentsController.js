const connection = require('../config/connection.js');



// const createDepartment = async (req, res) => {
//   const {departmentName} = req.body;
//   try {
//     const [ results, fields ] = await connection.query('INSERT INTO department (departmentName) VALUES (?);', [departmentName]);
    
//     const [department, ] = await connection.query('INSERT INTO department (departmentname) VALUES (?);', [departmentid]);

//     res.json(department[0]);
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// };

const createDepartment = async (req, res) => {
  const { departmentName } = req.body;
  try {
    const [results, fields] = await connection.query('INSERT INTO department (departmentName) VALUES (?);', [departmentName]);

    const [department, ] = await connection.query('SELECT * FROM department WHERE departmentName = ?', [departmentName]);

    res.json(department[0]);
  } catch (error) {
    res.status(500).json({ error });
  }
};


module.exports = {
  createDepartment,
};
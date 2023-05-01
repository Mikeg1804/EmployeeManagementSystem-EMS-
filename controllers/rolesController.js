const connection = require('../config/connection.js');

const createRole = async (req, res) => {
  const { jobtitle } = req.body; 
  const {department_id} = req.query;
  const query = 'INSERT INTO rol (jobtitle, department_id) VALUES (?, ?)';
  if (!jobtitle || !department_id) {
    return res.status(400).json({error: 'jobtitle and department Id must be provided'});
  }  
  try {
    const [result] = await connection.query(query, [jobtitle, department_id]);
    const query2 = `SELECT *
    FROM rol
    WHERE id = ?;`;
    const [rol] = await connection.query(query2, [result.insert_id]);
    res.json(rol[0]); 
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  createRole,
};





// const connection = require('../config/connection.js');


// const createRole = async (req, res) => {
//   const {username} = req.body;

//   try {

//     const [ results] = await connection.query('INSERT INTO rol (jobtitle) VALUES (?);', [jobtitle]);
    
//     const [roles ] = await connection.query('INSERT INTO rol (jobtitle) VALUES (?);', [rol_id]);

//     res.json(roles[0]);
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// };

// module.exports = {
//   createRole,
// };
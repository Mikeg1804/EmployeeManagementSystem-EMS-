const connection = require('../config/connection.js');

const createRole = async (req, res) => {
  const { jobtitle } = req.body; 

  try {
    const [results] = await connection.query('INSERT INTO rol (jobtitle) VALUES (?);', [jobtitle]);
    const [roles ] = await connection.query('INSERT INTO rol (jobtitle) VALUES (?);', [rol_id]);
    res.json(results.insertId); // return the inserted row ID instead of the jobtitle value
    
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
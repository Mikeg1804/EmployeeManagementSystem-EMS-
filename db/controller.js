const connection = require('./connection');

class choices {
    constructor(connection) {
        this.connection = connection
    }

async ViewDepartment() {
    const {text} = req.body;
    const {userId} = req.query;
    const query = 'INSERT INTO todos (text, department_id) VALUES (?, ?)';
  
    if (!text || !deparmentId) {
      return res.status(400).json({error: 'Text and DepartmentId must be provided'});
    }
  
    try {
      const [result] = await connection.query(query, [text, deparmentId]);
      const query2 = `SELECT *
                      FROM department
                      WHERE id = ?;`;
      const [department] = await connection.query(query2, [result.insertId]);
      res.json(department[0]);
    } catch (error) {
      res.status(500).json({error});
    };
   
}; 

ViewAllRoles() {

}; 
ViewAllEmployees() {

}; 

 newDepartment() {

}; 

newRole() {

};

newEmployee() {

};

newSalary() {

};

}
const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: 'localhost', // 127.0.0.1
  user: 'root',
  password: 'password',
  database: 'todos_v2',
}).promise();


module.exports = connection;

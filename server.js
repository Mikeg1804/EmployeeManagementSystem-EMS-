/* SQL is when an attacker is able to inject their own SQL scripts on our API's */
const express = require("express");
const mysql = require("mysql2");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "employees_information",
});

// /api/users?firstName=John&lastName=Doe

// Get all users
app.get("/api/users", (req, res) => {
  // req.query is an object that contains all the query parameters

  /*   { firstName: John, lastName: 'Doe' } */
  const query = "SELECT * FROM users WHERE ? = ? AND ? = ?;";
  // database queries are asynchronous

  /*
  *
  *
  * */
  db.query(
    query,
    [
      Object.keys(req.query)[0],
      req.query[Object.keys(req.query)[0]],
      Object.keys(req.query)[0],
      req.query[Object.keys(req.query)[1]],
    ],
    (err, result) => {
      if (err) {
        res.status(500).json({err});
      } else {
        res.json(result);
      }
    });


});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));


























app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

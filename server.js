const express = require('express');
const app = express();

const routes = require('./routes');

const PORT = 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// /api/employees
app.use(routes);



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



















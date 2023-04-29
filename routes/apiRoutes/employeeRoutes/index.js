//
const {
    createEmployee,
    getAllEmployees,
  } = require("../../../controllers/employeesController");
  const router = require('express').Router();
  
  router.get('/', getAllEmployees)
  router.post('/', createEmployee);
  
  module.exports = router;
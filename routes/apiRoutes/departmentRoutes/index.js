//Needwork.
const {
    createDepartment,
  } = require("../../../controllers/departmentsController");
  const router = require('express').Router();
  
  // /api/users
  router.post('/', createDepartment);
  // router.get('/', ())z
  
  module.exports = router;

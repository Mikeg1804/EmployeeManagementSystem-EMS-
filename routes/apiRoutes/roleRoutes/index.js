const {
    createRole,
  } = require("../../../controllers/rolesController");
  const router = require('express').Router();
  
  router.post('/', createRole);
  
  module.exports = router;
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/sesion', function(req, res, next) {
  res.send('Login/usuario');
});

module.exports = router;

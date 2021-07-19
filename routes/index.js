var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/habitaciones', function(req, res, next) {
  res.render('Habitaciones/habitacion', { title: 'Express' });
});

module.exports = router;

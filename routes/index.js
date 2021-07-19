var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.send('ACA VA LA PAGINA DE EYSSI');
});

router.get('/habitaciones', function(req, res, next) {
  res.render('Habitaciones/habitacion', { title: 'Express' });
});

module.exports = router;

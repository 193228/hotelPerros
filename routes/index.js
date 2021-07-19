var express = require('express');
var router = express.Router();
const controllerRoot = require('../controllers/paginaHabitaciones')

/* GET home page. */

router.get('/', controllerRoot.paginaHabitaciones)
  //res.send('ACA VA LA PAGINA DE EYSSI')

router.get('/habitaciones', function(req, res, next) {
  res.render('Habitaciones/habitacion', { title: 'Express' });
});

module.exports = router;
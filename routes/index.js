var express = require('express');
var router = express.Router();
const controllerRoot = require('../controllers/paginaHabitaciones')

/* GET home page. */

//router.get('/', controllerRoot.paginaHabitaciones)
router.get('/', function(req, res, next) {
  res.render('inicio', { title: 'Express' });
});

router.get('/habitaciones', controllerRoot.paginaHabitaciones)


router.get('/reservacion', function(req, res, next) {
  res.render('reservation', { title: 'Express' });
});

router.post('/confirmReservation', function (req, res, next) {
  let {valor} = req.body;
  console.log('Si entra al metodo');
  res.render('reservation', {valor:valor});
});


module.exports = router;
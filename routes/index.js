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

router.get('/infoStudents', function(req, res, next) {
  res.render('infoStudents', {title: 'Informacion'})
});



module.exports = router;
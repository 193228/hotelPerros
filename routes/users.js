var express = require('express');
var router = express.Router();
const controllerUser = require('../controllers/paginaLogin')

/* GET users listing. */
router.get('/register',controllerUser.pageRegistro)

router.post('/add',controllerUser.pageRegistro_agregarUsuario)

router.get('/login',controllerUser.pageLogin)

router.post('/validate',controllerUser.validacion)

router.get('/login/cambioContrasena',controllerUser.pageUpdate_cambioContrasena)

router.get('/login/eliminoCuenta',controllerUser.pageUpdate_eliminoCuenta)

router.post('/cambio',controllerUser.pageUpdate_cambioContrasena_action)

router.post('/elimino',controllerUser.pageUpdate_eliminoCuenta_action)

router.post('/confirmReservation', function (req, res, next) {
    let {valor} = req.body;
    console.log('Si entra al metodo');
    res.render('reservation', {valor:valor});
});

module.exports = router;
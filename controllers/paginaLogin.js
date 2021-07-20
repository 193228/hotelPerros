const User = require('../public/javascripts/UsuarioValidacion')
const userDao = require ('../models/users')

const pageRegistro = function (req,res){
    res.render('Login/registro',{title: "Registro"})
    res.end();
}

const validacion = function (req,res){
    const {username, password} = req.body
    userDao.findUser(username,password,(data)=>{
        if (data){
            res.render('reservation', { title: 'Express' });
        }else{
            res.send("FALLO")
        }
    })
}

const pageRegistro_agregarUsuario = function(req,res){
    console.log("LLAME")
    const {fullname, username, password} = req.body
    const nuevoUsuario = {fullname, username, password}
    User.agregarUsuario(req,res,password,nuevoUsuario)
}

const pageLogin = function (req,res){
    res.render('Login/login', {title:"Login"})
    res.end()
}

const pageUpdate_cambioContrasena = function(req,res){
    res.render('opcionesUsuario/cambiarContrasena', {title:"Login"})
}

const pageUpdate_eliminoCuenta = function(req,res){
    res.render('opcionesUsuario/eliminarCuenta', {title:"Login"})
}

const pageUpdate_cambioContrasena_action = function (req,res){
    const {username,password,newPassword,id} = req.body
    User.editarUsuario(req,res,username,password,newPassword,id);
}

const pageUpdate_eliminoCuenta_action = function (req,res){
    const {username,password,newPassword,id} = req.body
    User.eliminarUsuario(req,res,username,password,id)
}



module.exports = {
    pageRegistro,
    pageRegistro_agregarUsuario,
    pageLogin,
    validacion,
    pageUpdate_cambioContrasena,
    pageUpdate_eliminoCuenta,
    pageUpdate_cambioContrasena_action,
    pageUpdate_eliminoCuenta_action,
}
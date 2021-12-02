const userDao = require ('../../models/users')


function agregarUsuario(req,res,password,newUser) {
    if(password.length<5){
        let alert = require('alert');
        alert("Usuario No Registrado, Minimo 5 letras")
        res.redirect('https://hotelesperroscanahueca.herokuapp.com')
    }else{
        console.log("AGREGATE")
        agregarUsuario_action(req,res,newUser)
    }
}

function agregarUsuario_action(req,res,newUser) {
    console.log(newUser)
    userDao.insertUser(newUser,(data)=>{
        console.log("DATA: "+data)
        if (data){
            console.log("ENTREO")
            res.redirect('https://hotelesperroscanahueca.herokuapp.com')
        }else{
            res.redirect('https://hotelesperroscanahueca.herokuapp.com/users/register')
        }
    })
}

function editarUsuario(req,res,username,password,newPassword,id){
    if(newPassword.length<5){
        console.log("ENTRO aca pero porque?")
        req.flash('message',"Contraseña debil\nminimo 5 letras")
        res.redirect('/users/login/cambioContrasena')
    }else{
        console.log(password.length)
        editarUsuario_action(req,res,username,password,newPassword,id)
    }
}

/*function editarUsuario_action(req,res,d2,d3,d1){
    userDao.findUser(username,(data) =>{if(data && bcrypt.compareSync(d1,d2,d3)){
            console.log("SI COINCIDE")
            const variable = {username,password,newPassword: bcrypt.hashSync(,saltRounds), id:data.idusers}
            userDao.updatePassword(cambioContrasena,(info) =>{})
            res.redirect('/')
        }else if (data && !bcrypt.compareSync(f, f)){
            req.flash('message'," contraseña incorrecta")
            res.redirect('/users/login/cambioContrasena')
        }
        if (!data){
            req.flash('message'," Usuario incorrecto")
            res.redirect('/users/login/cambioContrasena')
        }
    });
}*/

function eliminarUsuario(req,res,username,password,id){
    userDao.findUser(username,(data) => {
        if (data && bcrypt.compareSync(password, data.password)) {
            console.log("SI COINCIDE")
            const eliminoUsuario = {username, password: bcrypt.hashSync(password, saltRounds), id: data.idusers}
            userDao.deleteUser(eliminoUsuario.id, (data) => {})
            res.redirect('/')
        }else if (data && !bcrypt.compareSync(password, data.password)){
            req.flash('message'," contraseña incorrecta")
            res.redirect('/users/login/eliminoCuenta')
        }
        if (!data) {
            req.flash('message',"Usuario incorrecto")
            res.redirect('/users/login/eliminoCuenta')
        }
    })
}

module.exports = {
    agregarUsuario,
    editarUsuario,
    eliminarUsuario
}
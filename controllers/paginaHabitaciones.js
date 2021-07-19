const pool = require("../config/database");
const habitacionesDao = require ('../models/habitaciones')

const paginaHabitaciones = async (req,res)=>{
    habitacionesDao.getAllHabitaciones((data)=>{
        console.log(data)
        res.render('Habitaciones/habitacion', {data: data, title: "Habitaciones"})
        res.end()
    })
}

module.exports = {
    paginaHabitaciones
}
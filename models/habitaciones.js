const pool = require("../config/database");

module.exports = {

    getAllHabitaciones:(callback)=>{
        let sql = 'SELECT * FROM habitaciones';
        pool.query(sql,(err,data)=>{
            if(err) throw err;
            if(data.length>0) return callback(data);
            if(data.length==0)
                return callback(data[err]);
        });
    },

}

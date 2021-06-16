const mongoose = require("mongoose");

const dbConnection = async()=>{
    try{
        mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology:true,
            useCreateIndex:true
        })
        console.log ('DB online')

    }catch(error){
        console.log(error)
        throw new Error("error al inicializar la base de datos")

    }
}

module.exports={
    dbConnection
}
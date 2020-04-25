const mogoose = require('mongoose');
//configuracion del entorno de variable
require('dotenv').config({path: 'variables.env'});

const conectarDB = async () => {
    try {
        await mogoose.connect(process.env.DB_MONGO,{
            useNewUrlParser: true,
            useUnifiedTopology:true,
            useFindAndModify: false
        });
        console.log('DB Conectada');
        
    } catch (error) {
        console.log(error);
        process.exit(1);// Detener la app
    }
}

module.exports = conectarDB;
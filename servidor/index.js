const express = require('express');
const conectarDB = require('./config/db');

//crear el servidor
const app = express();

//Conectar a la DB
conectarDB();

//Habilitar express.json
app.use(express.json({extended: true}));

//Puerto de la app
const PORT = process.env.PORT || 4000;

//Importar rutas

//Definir la pagina principal
app.use('/api/usuarios',require('./routes/usuarios'));

//arrancando la app
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});
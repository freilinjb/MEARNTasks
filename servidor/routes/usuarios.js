//Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

//Crear un usuario
//api/usuario 
//Recibe un request de tipo post
router.post('/', () => {
    console.log('Crear usuario...');
    
});
module.exports = router;
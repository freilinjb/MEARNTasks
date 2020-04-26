const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');
const auth = require('../middleware/auth');

//Crear un usuario
//api/proyectos
router.post('/', 
    auth,//Primero verifica el auth si se autentica pasa a la ejecucion
    proyectoController.crearProyecto
);

router.get('/', 
    auth,//Primero verifica el auth si se autentica pasa a la ejecucion
    proyectoController.crearProyecto
);

module.exports = router;
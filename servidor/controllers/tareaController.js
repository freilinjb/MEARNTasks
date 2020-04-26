const Tarea = require('../models/tarea.js');
const Proyecto = require('../models/Proyecto.js');
const { validationResult } = require('express-validator');

//Crear nueva tarea

exports.crearTarea = async (req, res) => {
    // revisar si hay errores
    const errores = validationResult(req);
    if( !errores.isEmpty() ) {
        return res.status(400).json({errores: errores.array() });
    }
}

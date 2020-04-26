const Proyecto = require('../models/Proyecto');
const { validationResult } = require('express-validator');

exports.crearProyecto = async (req, res) => {

    // revisar si hay errores
    const errores = validationResult(req);
    if( !errores.isEmpty() ) {
        return res.status(400).json({errores: errores.array() })
    }

    try {
        //Crear un nuevo proyecto
        const proyecto = new Proyecto(req.body);

        //Guardar el creador via JWT 
        proyecto.creador = req.usuario.id;

        //guardamos el proyecto
        proyecto.save();
        res.json(proyecto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

//Obtene todos los proyectos del usuario actual
exports.obtenerProyectos = async (req, res) => {
    try {
        //Traer todos los registros del id de usuario
        //find: condicion para traer los datos
        //sort cambia el orden en que fueron creados
    const proyectos = await Proyecto.find({creador: req.usuario.id}).sort({creado: -1});
        res.json({proyectos});
        
    } catch (error) {
        console.log(error); 
        res.status(500).send('Hubo un error en el servidor');
    }
}

//Actualizar un proyecto
exports.actualizarProyecto = async(req, res) => {
    // revisar si hay errores
    const errores = validationResult(req);
    if( !errores.isEmpty() ) {
        return res.status(400).json({errores: errores.array() })
    }

    const { nombre } = req.body;
    const nuevoProyecto = {};

    if(nombre) {
        nuevoProyecto.nombre = nombre;
    } 
    //La parte de actualizar es un poco mas complicada
    try {
        //Revisar el ID

        //Verificar si el proyecto existe

        //Verificar el creador del proyecto
        

    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
}
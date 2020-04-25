const Usuario = require('../models/Usuario');

exports.crearUsuario = async (req, res) => {
    try {
        let usuario;

        usuario = new Usuario(req.body);

        //guar el nuevo usuario
        await usuario.save();

        //Mensaje de confirmacion
        res.send('Usuario creado correctamente');
    } catch (error) {
        console.log(error);
        res.state(400).send('Hubo un error');
    }
}
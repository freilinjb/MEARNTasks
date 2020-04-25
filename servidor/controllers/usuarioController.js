const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');

exports.crearUsuario = async (req, res) => {

    const {nombre, email, password } = req.body;


    try {
        //Revisar que el usuario registrado sea unico
        let usuario = await Usuario.findOne({ email });

        console.log(usuario);

        if(usuario) {
            return res.json({msg: 'Usuario existe '});
            // return res.state(400).json({msg: 'El usuario ya existe'});
        }
        //crea el nuevo usuario
        usuario = new Usuario(req.body);

        //Hashear el password
        const salt = bcrypt.genSaltSync(10);
        usuario.password = bcrypt.hashSync(password, salt);

        //guar el nuevo usuario
        await usuario.save();

        //Mensaje de confirmacion
        res.json({msg: 'Usuario creado correctamente'});
    } catch (error) {
        console.log(error);
        res.state(400).send('Hubo un error');
    }
}
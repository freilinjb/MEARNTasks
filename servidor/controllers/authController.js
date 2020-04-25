const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
//El resultado de la validacion
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

//Copiando de usuarioController
//api/auth
exports.autenticarUsuario = async (req, res) => {
        //Revisar si hay errores
        const errores = validationResult(req);
        if(!errores.isEmpty()) {
            return res.json({errores: errores.array()});
        }

        //Verificar cuando alguien intente iniciar sesion 
        //verificar que el usuario exista 
        //Comparar la clasve y luego generar el JWT

        const {email, password } = req.body

        try {
            //Revisar que sea un usuario registrado
            let usuario = await Usuario.findOne({email});
            console.log(usuario);
            
            if(!usuario) {
                return res.status(400).json({msg: 'El usuario no existe'});
            }

            console.log(usuario);

            //Revisar el password 
            //Compara la compatresa con la cifrada
            const passCorrecto = await bcrypt.compare(password, usuario.password);
            if(!passCorrecto) {
                return res.status(400).json({msg: 'Password Incorrecto'});
            }

        const payload = {
            usuario: {
                _id: usuario._id
            }
        };

        //firmar el JWT
        jwt.sign(payload, process.env.SECRETA, {
            //Configuracion, activo por una hora
            expiresIn: 3600 //1 hora
        },(error, token) => {
            //callback
            if(error) throw error;

            //Mensaje de confirmacion
            //mover el mensaje
            res.json({token});

        });


        } catch (error) {
            console.log(error); 
        }
}
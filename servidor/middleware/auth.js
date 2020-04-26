const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    //Leer el token del header
    const token = req.header('x-auth-token');
    

    //Revisar si no hay token
    if(!token) {
        return res.status(401).json({msg: 'No hay Token, Permiso no valido'});
    }

    //Validar el token
    
}
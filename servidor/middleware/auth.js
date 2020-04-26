const jwt = require('jsonwebtoken');


module.exports = function(req, res, next) {
    //Leer el token del header
    const token = req.header('x-auth-token');
    
    console.log(token);
    
    //Revisar si no hay token
    if(!token) {
        return res.status(401).json({msg: 'No hay Token, permiso no válido'})
    }

    //Validar el token
    try {
        //Verifica el token
        const cifrado = jwt.verify(token, process.env.SECRETA);
        //en caso de que se verifique
        //se puede crear el request
        req.usuario =  cifrado.usuario;
        //para que vaya al siguiente middleware
        netxt();
    } catch (error) {
        res.status(401).json({msg: 'Token no valido'});
        //condifiones el token expiro o token invalido, etc
    }
}
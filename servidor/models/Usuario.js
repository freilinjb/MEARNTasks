const mongoose  = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    nombrer: {
        type: String,
        require: true,
        trim: true,
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true//No puede haber dos usuarios registrados
    },
    password: {
        type: String,
        require: true,
        trim: true,
    },
    registro: {
        type: Date,
        default: Date.now() //Genera una fecha en el momento que se registra
    }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
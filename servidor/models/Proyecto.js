const mongoose = require('mongoose');

const ProyectoSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    creador: {
        type: mongoose.Schema.Types.ObjectId, //Referencia
        ref: 'Usuario'
    },
    creado: {
        type: Date,
        default: Date.now()
    }
});

module.exports = ProyectoSchema; 
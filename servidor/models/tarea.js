const mongoose = requiere('mongoose');

const TareaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    estado: {
        type: Boolean,
        default: false
    },
    creado: {
        type: Date,
        ref: Date.now()
    },
    proyecto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: ''
    }
});


module.exports = mongoose.model('Tarea', TareaSchema);

// Requerir Dependencia Mongoose

const mongoose = require ( 'mongoose');
const FincasSchema = new mongoose.Schema(
    {
    id: {
        type: String,
        required: [true, 'El campo id es obligatorio']
    },
    numero: {
        type: String,
        required: [true, 'El Campo \'Numero\' es Obligatorio']
    },
    nombreFinca: {
        type: String,
        required: [true, 'El Campo \'Nombre de la finca\' es Obligatorio']
    },
    direccion:{
        type: String,
        required: [true, 'El Campo \'Direccion\' es Obligatorio']
    },
    valorAlquiler: {
        type: String,
        required: [true, 'El Campo \'valorAlquiler\' es Obligatorio']
    },
    cantidadDias: {
        type: String,
        required: [true, 'El Campo \'Cantidad de dias\' es Obligatorio']
    },
    })

// Exportacion


module.exports = mongoose.model('fincas', FincasSchema);
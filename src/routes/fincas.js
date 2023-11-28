const express = require('express');
const FincasSchema = require('../models/fincas'); 

// Constructor
const router = express.Router();

// Crear producto
router.post('/fincas', (req, res) => { 
    const fincas = new FincasSchema(req.body); // Cambio de "usuarioSchema" a "productoSchema"
    fincas
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener todos los productos
router.get('/fincas', (req, res) => {
    FincasSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener un producto
router.get('/fincas/:id', (req, res) => { 
    const { id } = req.params;
    FincasSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Actualizar un producto
router.put('/fincas/:id', (req, res) => { 
    const { id } = req.params;
    const { numero, nombreFinca, direccion,valorAlquiler,cantidadDias } = req.body;
    FincasSchema
        .updateOne({ _id: id }, { $set: { numero, nombreFinca, direccion,valorAlquiler,cantidadDias } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Eliminar un producto
router.delete('/fincas/:id', (req, res) => { 
    const { id } = req.params;
    FincasSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;

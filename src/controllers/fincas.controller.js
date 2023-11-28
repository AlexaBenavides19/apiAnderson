// Importamos los Modelos 
const FincasModelo = require('../models/fincas.model')

// Funcion Get 
const fincasGet = async(req, res) => {
    const finca = await FincasModelo.find();
    res.json({
        finca
    });
}

// Funcion Post 
const fincasPost = async(req, res) => {
    let messagge = 'Insercion Exitosa';
    try{
        const finca = new FincasModelo(req.body);
        await finca.save();
    }catch(error){
        messagge = error;
    }
    res.json({
        msg: messagge
    });
}

// Funcion Put
const fincasPut = async(req, res) => {
    let messagge = 'Modificacion Exitosa';
    const {_id,numero,nombreFinca,direccion,valorAlquiler,cantidadDias} = req.body
    try{
        await FincasModelo.updateMany(
            {_id:_id}, 
            {$set: {numero: numero,
                nombreFinca: nombreFinca,
                direccion: direccion,
                valorAlquiler: valorAlquiler,
                cantidadDias: cantidadDias,
            }});
    }catch(error){
        messagge = error;
    }
    res.json({
        msg: messagge
    })
}

// Funcion Delete
const fincasDelete = async (req, res) => {
    const {_id} = req.body;
    try{
        await FincasModelo.deleteOne({_id: _id});
        res.json({
            msg: 'Eliminacion Exitosa'
        });

    }catch(error){
        res.json({
            msg: error.message // Devuelve el mensaje de error al cliente
        });
    }
}

// Exportacion
module.exports = {
    fincasGet,
    fincasPost,
    fincasPut,
    fincasDelete
}

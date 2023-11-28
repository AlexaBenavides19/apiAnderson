// Requerir Dependencia Express - Router

const {Router} = require('express')
const route = Router()

// Importamos Metodos Controlador

const {fincasGet, fincasPost, fincasPut, fincasDelete} = require('../controllers/fincas.controller')

route.get('/', fincasGet);
route.post('/', fincasPost);
route.put('/', fincasPut);
route.delete('/', fincasDelete);

// Exportacion

module.exports = route

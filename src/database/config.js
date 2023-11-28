const mongoose = require('mongoose');
const dbConnection = async ()=>{
        try{
            await mongoose.connect(process.env.MONGO_URL);
            console.log('Conexión exitosa a la base de datos');
        }catch{
            onsole.error('Error de conexión a la base de datos:', error);
        }
}

module.exports = {dbConnection};

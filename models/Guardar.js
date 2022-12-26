const fs = require('fs');
archivo = './db/database.json';


//Metodo para guardar 
const guardarDB = (data) => {
    fs.writeFileSync(archivo, JSON.stringify(data));
}


module.exports = {
    guardarDB
};



const fs = require('fs');

class LeerDocumentos{

    dbPath = './db/dni.json';
    historialDni = [];

    constructor(){

    }

    leerDB = () =>{
        //Validar si existe
        if (!fs.existsSync(this.dbPath)) {
            return;
        }
        //Leer info
        const info = fs.readFileSync(this.dbPath, {encoding: 'utf-8'});
        const data = JSON.parse(info);
        const nuevaData = data.map((documento)=>{
            return documento.DNI;
        });
        return nuevaData;

    }

}

module.exports = LeerDocumentos;



























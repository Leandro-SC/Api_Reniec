const fs = require('fs');

class Agregar{

    dataBase = [];
    dbPath = './db/database.json';

    constructor(){}

    //Agregamos a consolidado en array
    agregarConsolidado(personas) {
        if (this.dataBase.includes(personas.id)) {
            return;
        }
        this.dataBase.unshift(personas)
        //Grabar en DB
        return this.agregarBaseDatos();
    }

    //Agregamos a database
    agregarBaseDatos() {
        const payload = {
            dataBase:this.dataBase
        }
        return fs.writeFileSync(this.dbPath, JSON.stringify(payload));
    }
}


module.exports = Agregar;























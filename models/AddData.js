const Personas = require("./Personas");
const fs = require('fs');

class AddData {

    _listado = {};
    dbPath = './db/database.json';

    constructor() {
        this._listado = {};
    }

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(id => {
            listado.push(this._listado[id]);
        });
        return listado;
    }

    //Metodo que agrega una tarea a la lista
    crearData(personas) {
        const persona = new Personas();
        this._listado[persona.id] = personas;
    }

}

module.exports = AddData;























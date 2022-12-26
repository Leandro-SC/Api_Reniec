const axios = require('axios');
const express = require('express');
const app = express();
const fs = require('fs');
const Personas = require('./Personas');
require('dotenv').config()
const token = "cGVydWRldnMucHJvZHVjdGlvbi5maXRjb2RlcnMuNjNhNGRlNzAxZWQ1YjUzMmJmNGFlMGEw"


class Busquedas {

    consolidado = [];
    dbPath = './db/database.json';

    constructor() {
        //TODO: leer DB si existe
        //this.leerDB();
    }


    async infoDocumento(dni = 0) {
        try {
            const intance = axios.create({
                baseURL: `https://api.perudevs.com/api/v1/dni/complete?document=${dni}&key=${token}`,
            });
            const resp = await intance.get();
            const status = resp.data.estado;
            const info = resp.data.resultado;
            if (status===false) {
                const persona = new Personas(id='', apellido_paterno='', apellido_materno='', nombres='', fecha_nacimiento='');
                return persona; 
            } else if (status===true) {
                return info;
            }
            
        } catch (error) {
            console.log(error);
            return [];
        }
    }


}


module.exports = Busquedas




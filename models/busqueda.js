const axios = require('axios');
const express = require('express');
const app = express();
const fs = require('fs');
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
            const info = resp.data.resultado;
            return info;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    agregarPersona(persona) {
        this.consolidado.unshift(persona);
        //Grabar en DB
        this.guardarDB();
    }

    guardarDB() {
        const payload = {
            consolidado: this.consolidado
        }
        fs.writeFileSync(this.dbPath, JSON.stringify(payload));

    }

    // leerDB = () => {
    //     //Validar si existe
    //     if (!fs.existsSync(this.dbPath)) {
    //         return;
    //     }
    //     //Leer info
    //     const info = fs.readFileSync(this.dbPath, { encoding: 'utf-8' });
    //     const data = JSON.parse(info);
    //     this.consolidado = data.consolidado;

    // }


}


module.exports = Busquedas




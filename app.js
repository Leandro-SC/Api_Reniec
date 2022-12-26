const axios = require('axios');
const express = require('express');
const app = express();
const fs = require('fs');
require('dotenv').config()
const Busquedas = require("./models/busqueda");
const Personas = require("./models/Personas");
const Agregar = require("./models/Agregar");
const port = process.env.PORT; //process.env.PORT cuando el puerto es dinamico

//Routing
// app.get('/', (req, res) => {
//     res.send('Mi servidor online');
//     res.end();
// });
const main = async () => {

        const documents = ["46246371"];
        //Instanciar api         
        const busquedas = new Busquedas();
        //buscar resultado
        for (const document of documents) {
                const info_dni = await busquedas.infoDocumento(document);
                //Obtener resultado
                const { id, apellido_paterno, apellido_materno, nombres, fecha_nacimiento } = info_dni;
                //agregar datos a un objeto
                const persona = new Personas(id, apellido_paterno, apellido_materno, nombres, fecha_nacimiento);
                //Enviar datos a una DB en json
                const add = new Agregar();
                add.agregarConsolidado(persona);
        }

}

// const LeerDocumentos = require('./models/LeerDocumentos');

// function main2() {
//       const datos = new LeerDocumentos();
//       const data = datos.leerDB();
//       console.log(data);

// }

// main2();

main();
//Puerto Listen
// app.listen(port, () => {
//     console.log(`El servidor está corriendo en el puerto ${port}`);
// });


















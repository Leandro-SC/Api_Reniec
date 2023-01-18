const axios = require('axios');
const express = require('express');
const app = express();
const fs = require('fs');
require('dotenv').config()
const Busquedas = require("./models/busqueda");
const Personas = require("./models/Personas");
const Agregar = require("./models/Agregar");
const AddData = require('./models/AddData');
const { guardarDB } = require('./models/Guardar');
const ConversionSheet = require('./helpers/excelConvert');
const LeerDocumentos = require('./models/LeerDocumentos');

const port = process.env.PORT; //process.env.PORT cuando el puerto es dinamico

//Routing
// app.get('/', (req, res) => {
//     res.send('Mi servidor online');
//     res.end();
// });
const main = async () => {

        //Array de documentos
        const new_documents = new LeerDocumentos();
        const doc = new_documents.readDB();

        const documents = [
                '05001787',
        ];
        //Instanciar api         
        const busquedas = new Busquedas();
        const add = new AddData();
        let data = add.listadoArr;

        try {
                //buscar resultado
                for (const document of documents) {
                        const info_dni = await busquedas.infoDocumento(document);
                        //Obtener resultado
                        const { id, apellido_paterno, apellido_materno, nombres, fecha_nacimiento } = info_dni;

                        //agregar datos a un objeto
                        const persona = new Personas(id, apellido_paterno, apellido_materno, nombres, fecha_nacimiento);
                        add.crearData(persona);
                        data.push(persona);
                }

                const excel = new ConversionSheet();
                guardarDB(data);
                excel.leerDB();
                console.log("Proceso culminado");
        } catch (error) {
                console.log(error);
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


















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
// const main = async ()=>{

//            //Instanciar apu             
//            const busquedas = new Busquedas();
//            //buscar resultado
//            const info_dni = await busquedas.infoDocumento(45791001);
//            //Obtener resultado
//            const {id,apellido_paterno,apellido_materno,nombres, fecha_nacimiento} = info_dni;
//            //agregar datos a un objeto
//            const persona = new Personas(id,apellido_paterno,apellido_materno,nombres, fecha_nacimiento);
//            //Enviar datos a una DB en json
//            const add = new Agregar();
//            const addData = add.agregarConsolidado(persona);
//             //Mostrar resultados
//             console.log('\nInformacion de la Persona\n');
//             console.log('Informacion de la Persona ' + nombres);
//             console.log(info_dni);
            

// }

const LeerDocumentos = require('./models/LeerDocumentos');

function main2() {
      datos = new LeerDocumentos();
      
}

main2();

//main();
//Puerto Listen
// app.listen(port, () => {
//     console.log(`El servidor está corriendo en el puerto ${port}`);
// });


















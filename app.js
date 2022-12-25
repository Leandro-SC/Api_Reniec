const axios = require('axios');
const express = require('express');
const app = express();
const fs = require('fs');
require('dotenv').config()
const Busquedas = require("./models/busqueda");
const Personas = require("./models/Personas");
const port = process.env.PORT; //process.env.PORT cuando el puerto es dinamico


//Routing
// app.get('/', (req, res) => {
//     res.send('Mi servidor online');
//     res.end();
// });
// const main = async ()=>{

//            const busquedas = new Busquedas();
//            const persona = new Personas();
//            //
//            const info_dni = await busquedas.infoDocumento(45791001);
//            const {id,apellido_paterno,apellido_materno,nombres, fecha_nacimiento } = info_dni;
        //    let datos = persona.agregarPersonas({
        //            "apellido paterno":apellido_paterno,
        //            "apellido materno":  apellido_materno,
        //            "nombres":nombres,
        //            "fecha de nacimiento" : fecha_nacimiento
        //    });
//             //Mostrar resultados
//             console.log('\nInformacion de la Persona\n');
//             console.log('Informacion de la Persona ' + nombres);
//             console.log(info_dni);
//             console.log(datos);

// }

 

    





//main();
//Puerto Listen
// app.listen(port, () => {
//     console.log(`El servidor está corriendo en el puerto ${port}`);
// });


















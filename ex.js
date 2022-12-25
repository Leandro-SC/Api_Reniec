require('dotenv').config()

const { inquirerMenu, leerInput, pausa, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

//Limpiar consola
console.clear();

//Funcion principal
const main = async()=>{

    const busquedas = new Busquedas();
    let opt = '';


    //Ciclo para recorrer el menu
    do {
        //Imprimir menu y mostrar opciones
        opt = await inquirerMenu();
        //Seleccionar opciones
        switch (opt) {
            case 1:
                //MOstrar mensaje
                const valor_buscado = await leerInput('Ciudad: ');
                //Buscar los lugares
                const lugares = await busquedas.ciudad(valor_buscado);
                //Seleccionar el lugar
                const id = await listarLugares(lugares);
                if(id === '0') continue;
                const lugarSeleccionado = lugares.find(l=>l.id === id);
                //guardar en DB
                busquedas.agregarHistorial(lugarSeleccionado.nombre);

                const {nombre, lng, lat} = lugarSeleccionado;
                console.log({id});
                //Clima
                const info_clima = await busquedas.clima(lat,lng);
                const {desc,min,max,temp} = info_clima;
                //Mostrar resultados
                console.clear();
                console.log('\nInformacion de la Ciudad\n'.green);
                console.log('Ciudad: ',nombre);
                console.log('Lat: ', lat);
                console.log('Lng: ', lng);
                console.log('\nInformacion del clima\n'.green);
                console.log('El clima está: ', desc);
                console.log('Temperatura: ',temp);
                console.log('Minima: ',min);
                console.log('Maxima', max);
        
                break;
            case 2:
                busquedas.historialCapitalizado.forEach((lugar, i)=>{
                const idx = `${i+1}.`.green;
                console.log(`${idx+1}.`.green + ` ${lugar}`);
                })
                
                
                break;
        }

        if (opt !==0) await pausa();

    } while (opt !==0);
}

//Llamar función
main();
































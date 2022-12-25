const fs = require('fs');

const axios = require('axios');

class Busquedas {

    historial = [];
    dbPath = './db/database.json';

    //Seccion constructor
    constructor() {
        //TODO: leer DB si existe
        this.leerDB();
    }

    get historialCapitalizado(){
        return this.historial.map(lugar =>{
            let palabras = lugar.split(' ');
            palabras = palabras.map(p => p[0].toUpperCase() + p.substring(1));
            return palabras.join(' ');    
        });
    }

    get paramsMapBox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'country': 'pe',
            'limit': 5,
            'language': 'es'
        }
    }

    get paramsClima(){}

    async ciudad(lugar = '') {

        try {
            //peticion http
            const intance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapBox
            });
            const resp = await intance.get();
            const info = resp.data.features.map(lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1],
            }));
            return info;

        } catch (error) {
            console.log(error);
            return [];
        }

    }

    async clima(lat = '', lon = '') {

        try {
            const instancia_clima = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: {
                    'lat': lat,
                    'lon': lon,
                    'lang': 'es',
                    'appid': process.env.OPENWEATHER_KEY,
                    'units':'metrics'
                }
            });
            const resp = await instancia_clima.get();
            const {main, weather} = resp.data;
            const dato_Clima = {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            }
            return dato_Clima;


        } catch (error) {
            return [];

        }


    }


    agregarHistorial(lugar = ''){
        //prevenir duplicados
        if (this.historial.includes(lugar.toLocaleLowerCase())) {
            return;
        }
        this.historial = this.historial.splice(0,5);
        this.historial.unshift(lugar.toLocaleLowerCase());
        //Grabar en DB
        this.guardarDB();

    }

    guardarDB(){
        const payload = {
            historial:this.historial
        }
        fs.writeFileSync(this.dbPath, JSON.stringify(payload));

    }
    
    leerDB = () =>{
        //Validar si existe
        if (!fs.existsSync(this.dbPath)) {
            return;
        }
        //Leer info
        const info = fs.readFileSync(this.dbPath, {encoding: 'utf-8'});
        const data = JSON.parse(info);
        this.historial = data.historial;

    }
}




module.exports = Busquedas;
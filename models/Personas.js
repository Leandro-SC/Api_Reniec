

class Personas{

    constructor(){
           this.personas = []
    }

    agregarPersonas(persona){
        this.personas.push(persona);
    }


}

const persona = new Personas();
persona.agregarPersonas({
    "nombre":"pueba"
});
console.log(persona);


module.exports = Personas






let data = [];

//Agregar datos
function agregarDatos(id,apellido_paterno,apellido_materno,nombres, fecha_nacimiento) {
      this.id = id,
      this.apellido_paterno = apellido_paterno,
      this.apellido_materno = apellido_materno,
      this.nombres = nombres,
      this.fecha_nacimiento = fecha_nacimiento

}

const persona1 = new agregarDatos(
      "2",
      "Lopez",
      "Guti",
      "Leon Panda",
      "31/01/1980"
);
const persona2 = new agregarDatos(
      "3",
      "Montes",
      "Lopenza",
      "Marita Sara",
      "30/04/1992"
);
const datosPersona = JSON.stringify(persona1);
const datosPersona2= JSON.stringify(persona2);
datosAdd = data.push(datosPersona);
datosAdd2 = data.push(datosPersona2);

console.log(data);




















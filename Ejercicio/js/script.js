var dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
var esMayor = true;
var edad = 25;
var nombre = 'Christian';

if (edad > 25){
    esMayor = true;
}

for (let index = 0; index < dias.length; index++) {
    console.log(dias[index]);
}

if(esMayor){
    console.log("Eres mayor");
}

var fechas = new Date();
var horas = fechas.getHours();

console.log(horas);

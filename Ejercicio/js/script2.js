var dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
var esMayor = true;
var edad = 25;
var nombre = 'Christian';

var total = (edad>=20) ? 'La edad es mayor a 20 ' : 'Es menor a 20';

if (edad > 25){
    esMayor = true;
}

for (let index = 0; index < dias.length; index++) {
    console.log(dias[index]);
}

if(edad > 50){
    alert("Eres mayor de 50");
} else if(edad > 18){
    alert('Eres mayor de edad');
} else{
    alert('Eres menor de edad');
}

switch(edad){

    case 18>=0:
        alert('soy mayor');
        break;
    case 'Montevideo':
        alert('Estoy en montevideo');
        break;
    default:
        break;

}

var fechas = new Date();
var horas = fechas.getHours();

console.log(horas);

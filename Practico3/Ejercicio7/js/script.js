var n1 = parseInt(prompt("Ingrese el primero numero: "));
var n2 = parseInt(prompt("Ingrese el primero numero: "));

document.write("El primer numero ingresado es: " + n1);
document.write("<br />");
document.write("El segundo numero ingresado es: " + n2);
document.write("<br />");

var cantidadN1 = 0;
var cantidadN2 = 0;

for (let index = 1; index <= n1; index++) {
    // Es divisible
    if(n1%index == 0)
        cantidadN1++;
}


for (let index = 1; index <= n2; index++) {
    // Es divisible
    if(n2%index == 0)
        cantidadN2++;
}

if(cantidadN1==2 && cantidadN2==2){
    document.write("Los dos numeros son primos. Por favor, ingrese un solo numero primo.");
}else{
    if(cantidadN1==2)
        document.write("El segundo numero es primo: " + n2);
    else
        document.write("El primer numero es primo: " + n1);
}
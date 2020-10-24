var n1 = parseInt(prompt("Ingrese un numero: "));

document.write("El numero ingresado es: " + n1);
document.write("<br />");
for (let index = 1; index <= n1; index++) {
    // Es divisible
    if(n1%index == 0){
        document.write("Es divisible entre: " + index + "<br />");
    }
}
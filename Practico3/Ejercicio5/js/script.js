var n1 = parseInt(prompt("Ingrese el primero numero: "));
var n2 = parseInt(prompt("Ingrese el primero numero: "));

document.write("El primer numero ingresado es: " + n1);
document.write("<br />");
document.write("El segundo numero ingresado es: " + n2);
document.write("<br />");

for (let index = 1; index <= n1; index++) {
    // Es divisible
    if(n1%index == 0)
        if(n2%index == 0)
            document.write("El numero " + index + " es divisible entre ambos. <br />");
}
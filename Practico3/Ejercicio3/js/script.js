var n1 = parseInt(prompt("Ingrese un numero: "));
var total = 1;
for (let index = 1; index <= n1; index++) {
    total*=index;
}

document.write("El factorial de " + n1 +" es :" + total);
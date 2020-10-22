var n1 = parseInt(prompt("Ingrese el primer numero"));
var n2 = parseInt(prompt("Ingrese el segundo numero"));
var n3 = parseInt(prompt("Ingrese el tercer numero"));
var mayor;

if(n1 > n2)
    mayor = n1;
else
    mayor = n2;

if(mayor < n3)
    mayor = n3;

alert("El mayor es: " + mayor);
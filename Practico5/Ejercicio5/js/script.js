var lista1 = prompt("Ingrese primera lista separada por ',' :");
var res1 = lista1.split(",");

var lista2 = prompt("Ingrese segunda lista separada por ',' :");
var res2 = lista2.split(",");

document.write("Comparar cantidad de elementos:");
document.write("<br />");

if(res1.length == res2.length)
    document.write("La cantidad de elementos son iguales para la lista 1 y 2.");
else
    document.write("La cantidad de elementos son diferentes.");
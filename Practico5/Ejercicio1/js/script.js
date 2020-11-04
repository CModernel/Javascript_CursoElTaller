var lista1 = prompt("Ingrese una lista separada por ',' :");
var res1 = lista1.split(",");

document.write("Lista: ");
document.write("<br />");
for (let index = 0; index < res1.length; index++) {
    document.write(res1[index]);
    document.write("<br />");
}
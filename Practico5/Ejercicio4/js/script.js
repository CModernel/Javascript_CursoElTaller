var lista1 = ['uno','dos','tres','cuatro','cinco'];
var lista2 = ['arbol','casa','agua','nube','tierra'];
var lista3 = [];

document.write("Union:");
document.write("<br />");
for (let index = 0; index < 5; index++) {
    lista3.push(lista1[index]);
    lista3.push(lista2[index]);
}

document.write(lista3.toString());

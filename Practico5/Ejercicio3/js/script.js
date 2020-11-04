var lista1 = ['uno','dos','tres','cuatro','cinco'];
var lista2 = ['arbol','casa','cinco','nube','uno'];
var lista3 = [];

document.write("Interseccion:");
document.write("<br />");
for (let index = 0; index < lista1.length; index++) {
    if(lista2.indexOf(lista1[index]) != -1)
        lista3.push(lista1[index]);
}

document.write(lista3.toString());

var lista1 = prompt("Ingrese primera lista separada por ',' :");
var res1 = lista1.split(",");

var lista2 = prompt("Ingrese segunda lista separada por ',' :");
var res2 = lista2.split(",");

document.write("Sumar arrays");
document.write("<br />");

var resultado = sonIguales(res1, res2);

document.write(resultado.toString());

function sonIguales(arr1, arr2){
    if(arr1.length == arr2.length)
        return sumarArrays(arr1, arr2);
    else
        document.write("La cantidad de elementos son diferentes.");
}

function sumarArrays(arr1, arr2){
    var arr3 = [];
    for (let index = 0; index < arr1.length; index++) {
        arr3.push(parseInt(arr1[index])+parseInt(arr2[index]));
    }
    return arr3;
}
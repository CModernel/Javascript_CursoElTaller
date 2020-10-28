var num1 = 5;
var texto = "5";

document.write(esNumero(num1));
document.write("<br />");
document.write(esNumero(texto));

function esNumero(numero1){
    
    if(typeof numero1 == 'number')
        return esNumeroEntero(numero1)
    else
        return "Error: El parametro no es numerico."
}

function esNumeroEntero(numero1){
    if(Number.isInteger(numero1))
        return "Es numero entero."
    else
        return "Error: El numero no es entero."
}
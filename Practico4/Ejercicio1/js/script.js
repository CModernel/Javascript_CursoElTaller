var valor1 = totalConImpuesto(100, 0.18);
var valor2 = totalConImpuesto(100);

document.write("Valor incluyendo dos parametros:" + valor1);
document.write("<br />");
document.write("Valor incluyendo un parametro:" + valor2);

function totalConImpuesto(precio, iva){
    var retorno;
    if(iva){
        retorno = precio + (precio*iva);
    }else{
        retorno = precio + (precio * 0.21);
    }
    return retorno;
}

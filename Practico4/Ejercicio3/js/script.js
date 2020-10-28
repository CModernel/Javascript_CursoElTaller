var textoOriginal = "Hola que tal";
var textoInvertido = textoAlReves(textoOriginal);

document.write("textoOriginal " + textoOriginal);
document.write("<br />");
document.write("textoInvertido " + textoInvertido);

function textoAlReves(texto){
    var retorno = "";

    for (let index = texto.length-1; index >= 0; index--) {
        const element = texto[index];
        retorno+=element; 
    }

    return retorno;
}
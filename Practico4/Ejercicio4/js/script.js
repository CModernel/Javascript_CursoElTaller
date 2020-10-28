var num = 5;
document.write(esPar(num));

function esPar(numero){
    var retorno = "";
    if(numero%2 == 0)
        retorno = "Es par";
    else
        retorno = "Es impar";

    return retorno;
}
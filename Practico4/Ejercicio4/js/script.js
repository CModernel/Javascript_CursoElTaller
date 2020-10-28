var num = 5.5;
document.write(esPar(num));

function esPar(numero){
    var retorno = "";
    if(Number.isInteger(numero)){
        if(numero%2 == 0)
            retorno = "Es par";
        else
            retorno = "Es impar";
    }else{
        retorno = "Numero no es entero"
    }
    return retorno;
}
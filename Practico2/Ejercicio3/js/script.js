var n1 = prompt("Ingrese un numero");
var n2 = prompt("Ingrese otro numero");
var mensaje;

if(parseInt(n1) > parseInt(n2))
{
    mensaje = "El primero numero es mayor que el segundo.";
}
else if(parseInt(n2) > parseInt(n1))
{
    mensaje = "El segundo numero es mayor que el primero.";
}
else
{
    mensaje = "Lo dos numeros son iguales";
}


alert(mensaje);
var n1 = parseInt(prompt("¿Que helado desea comprar?\n1- Helado de Oreo\n2- Helado de Kitkat\n3- Helado de Brownie\n4- Helado de Menta Granizada"));

var mensaje = "El total es: "; 

switch(n1){
    case 1:
        mensaje += " 1 peso(s).";
        break;
    case 2:
        mensaje += " 1.5 peso(s).";
        break;
    case 3:
        mensaje += " 0.75 peso(s).";
        break;
    case 4:
        mensaje += " 0.95 peso(s).";
        break;
    default:
        mensaje = "No existe este helado."
        break;
}    


alert(mensaje);
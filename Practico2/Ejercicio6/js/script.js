var n1 = parseInt(prompt("¿Que helado desea comprar?\n1- Helado de Oreo\n2- Helado de Kitkat\n3- Helado de Brownie\n4- Helado de Menta Granizada"));

var mensaje = "El total es: "; 

if(n1==1)
    mensaje += " 1 peso(s).";
else if (n1==2)
    mensaje += " 1.5 peso(s).";
else if (n1==3)
    mensaje += " 0.75 peso(s).";
else if (n1==4)
    mensaje += " 0.95 peso(s).";
else
    mensaje = "No existe este helado."

alert(mensaje);
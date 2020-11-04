var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("reloj").innerHTML = d.toLocaleTimeString();
}

var listaComida =[
    ["Fruta","Manzana","Banana","Frutilla","Melón"],
    ["Verduras","Tomate","Cebolla","Morrón","Ajo"],
    ["Carne","Asado","Pulpón","Picada","Corazón"]
   ]

function tablaListaComida(){

  var retorno = "";
  
  // Header
  for (let i = 0; i < listaComida.length; i++) {
    retorno = retorno + " <th> " + listaComida[i][0] + " </\th> ";
  }
  
  document.getElementById("header").innerHTML = retorno;

  // Body
  retorno = "";
  
  for (let i = 1; i < listaComida[1].length; i++) {
    retorno = retorno + "<tr>";
    for (let j = 0; j < listaComida.length; j++) {
        retorno = retorno + " <td> " +listaComida[j][i] + " </\td> ";
    }
    retorno = retorno + "</\tr>";
  }
  
  document.getElementById("body").innerHTML = retorno;
}

tablaListaComida();

var myArray = new Array();

var user1 = new usuario('1234567', 'abc','def', 'abc@gmail.com', '123', 'Montevideo');
myArray.push(user1);
console.log(myArray);

function chequearCedula(){
    var cedula = document.getElementById("cedulaInput").value;
    var valido = true;

    if(cedula.length != 7 && cedula.length != 8){
        valido = false;
        alert("La cedula tiene que ser entre 7 y 8 digitos.");
    }
    else
    {
        for (let index = 0; index < cedula.length; index++) {
            if(!Number.isInteger(parseInt(cedula[index]))){
                valido = false;
                alert("La cedula tiene que ser númerico.");
                break;
            }
        }
    }
    return valido;
}

function emailIsValid () {
    var email = document.getElementById("CorreoInput").value;
    if(email.length==0)
        alert("Correo electronico no puede estar vacío.");
    return /\S+@\S+\.\S+/.test(email)
}

function chequearNombreApellido(){
    var nombre = document.getElementById("nombreInput").value;
    var apellido = document.getElementById("ApellidoInput").value;

    if(nombre.length==0){
        alert('Nombre no puede estar vacío.')
        return false;
    }

    if(apellido.length==0){
        alert('Apellido no puede estar vacío.')
        return false;
    }

    return true;
}

function chequearPassword(){
    var pass1 = document.getElementById("Password1Input").value;
    var pass2 = document.getElementById("Password2Input").value;

    if(pass1.length==0){
        alert('Campo de contraseña no puede estar vacio.');
        return false;
    }

    if(pass2.length==0){
        alert('Por favor, Repita la contraseña.');
        return false;
    }

    if(pass1 != pass2){
        alert('Las contraseñas ingresadas no coinciden.');
        return false;
    }

    return true;
}

function chequearLugarNac(){
    var lugarNacInput = document.getElementById("lugarNacInput").value;

    if(lugarNacInput==""){
        alert('Por favor, ingrese lugar de nacimiento.');
        return false;
    }

    return true;
}

function crearUsuario(){
    var cedula = document.getElementById("cedulaInput").value;
    var nombre = document.getElementById("nombreInput").value;
    var apellido = document.getElementById("ApellidoInput").value;
    var email = document.getElementById("CorreoInput").value;
    var pass1 = document.getElementById("Password1Input").value;
    var lugarNacInput = document.getElementById("lugarNacInput").value;

    var nuevoUsuario = new usuario(cedula, nombre, apellido, email, pass1, lugarNacInput);
    myArray.push(nuevoUsuario);

}

function registrar(){
    if(chequearCedula()){
        if(chequearNombreApellido()){
            if(emailIsValid()){
                if(chequearPassword()){
                    if(chequearLugarNac()){
                        alert("Se registro correctamente");
                        crearUsuario();
                    }
                }
            }
        }
    }
    return false;
}


function usuario(cedula, nombre, apellido, email, pass, lugarnac){
    this.cedula = cedula;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.pass = pass;
    this.lugarnac = lugarnac;
}




function login(){
    var email = document.getElementById("exampleInputEmail1").value;
    var pass = document.getElementById("exampleInputPassword1").value;
    
    for (let index = 0; index < myArray.length; index++) {
        const element = myArray[index];
        if(element.email == email){
            if(element.pass == pass){
                // login
                window.open("./principal.html?nombre="+element.nombre);
                
            }else{
                alert('Constraseña es incorrecta.');
            }
        }
    }
    return false;
}



function myTimer() {
  var d = new Date();
  document.getElementById("reloj").innerHTML = d.toLocaleTimeString();
}

function reloj(){
    var myVar = setInterval(myTimer, 1000);
}

function setearNombre(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var nombre = urlParams.get('nombre');
    document.getElementById('usuId').innerHTML = "Nombre de Usuario: " + nombre;
}

function principal(){
    reloj();
    setearNombre();
}

$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  
    for (var i=0;i<4;i++) {
      next=next.next();
      if (!next.length) {
        next=$(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
    }
  });
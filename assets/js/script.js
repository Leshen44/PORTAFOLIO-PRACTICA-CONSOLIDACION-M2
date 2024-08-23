var botonEnviar = document.getElementById("botonEnviar");
var nombre = document.getElementById("nombre");
var correo = document.getElementById("email");
var consulta = document.getElementById("consulta");
var estado = document.getElementById("estado");
function mostrarFormulario() {
  var formulario = document.getElementById("formularioContacto");
  var botonContraer = document.getElementById("botonContraer");
  var botonExpandir = document.getElementById("botonExpandir");
  if (formulario.style.display == "none") {
    formulario.style.display = "block";
    botonContraer.style.display = "block";
    botonExpandir.style.display = "none";
    estado.innerHTML = "";
  } else {
    formulario.style.display = "none";
    botonContraer.style.display = "none";
    botonExpandir.style.display = "block";
    botonEnviar.innerHTML = "Enviar";
  }
}
function validarDatos() {
  if (nombre.value == "" || correo.value == "" || consulta == "") {
    alert("Por favor, complete todos los campos");
    return false;
  } else {
    return true;
  }
}

function modificarEnviar() {
  if (validarDatos() == true) {
    mostrarFormulario();
    nombre.value = "";
    correo.value = "";
    consulta.value = "";
    estado.innerHTML = "Enviando Datos..";
  }
}

const nombre = document.getElementById("nombre");
const correo = document.getElementById("email");
const rut = document.getElementById("rut");
const contraseña = document.getElementById("contraseña");
const repetircontraseña = document.getElementById("repetircontraseña");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let condicion = validacionForm();
    if (condicion) {
      enviarFormulario();
    }
  });
  function validacionForm() {
    form.lastElementChild.innerHTML = "";
    let condicion = true;
    listInputs.forEach((element) => {
      element.lastElementChild.innerHTML = "";
    });
  
    if (nombre.value.length < 1 || nombre.value.trim() == "") {
      mostrarMensajeError("nombre", "Nombre no valido*");
      condicion = false;
    }

    if (correo.value.length < 1 || correo.value.trim() == "") {
        mostrarMensajeError("email", "Correo no valido*");
        condicion = false;
    }
    if (contraseña.value.length < 1 || contraseña.value.trim() == "") {
        mostrarMensajeError("contraseña", "Contraseña no valido*");
        condicion = false;
    }
    if (repetircontraseña.value != repetircontraseña.value) {
        mostrarMensajeError("repetircontraseña", "Contraseña error*");
        condicion = false;
    }

    return condicion;
}

    function mostrarMensajeError(claseInput, mensaje) {
        let elemento = document.querySelector(`.${claseInput}`);
        elemento.lastElementChild.innerHTML = mensaje;
      }
      
      function enviarFormulario() {
        form.reset();
        form.lastElementChild.innerHTML = "Listo !!";
      }
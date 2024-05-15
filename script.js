
function validarFormulario() {
  var nombre = document.getElementById("firstname").value;
  var apellido = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var contraseña = document.getElementById("password").value;
  var fechaNacimiento = document.getElementById("birthdate").value;
  var sede = document.getElementById("sedes").value;
  var aceptarTerminos = document.getElementById("terms").checked;

  if (nombre == "" || apellido == "" || email == "" || contraseña == "" || fechaNacimiento == "" || sede == "" || !aceptarTerminos) {
      alert("Por favor, complete todos los campos y acepte los términos y condiciones.");
      return false; // Evita que el formulario se envíe
  }

  return true;
}

document.getElementById("formRegister").addEventListener("submit", function(event) {
  // Prevenir el envío del formulario si la validación no es correcta
  if (!validarFormulario()) {
      event.preventDefault();
  }
});

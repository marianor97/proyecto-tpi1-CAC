// formValidation.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formRegister");

  form.addEventListener("submit", function (event) {
    let valid = true;

    // Nombre
    const firstname = document.getElementById("firstname");
    const errorFirstname = document.getElementById("error-firstname");
    if (firstname.value.trim() === "") {
      valid = false;
      errorFirstname.textContent = "Por favor ingrese su nombre.";
    } else {
      errorFirstname.textContent = "";
    }

    // Apellido
    const lastname = document.getElementById("lastname");
    const errorLastname = document.getElementById("error-lastname");
    if (lastname.value.trim() === "") {
      valid = false;
      errorLastname.textContent = "Por favor ingrese su apellido.";
    } else {
      errorLastname.textContent = "";
    }

    // Correo electrónico
    const email = document.getElementById("email");
    const errorEmail = document.getElementById("error-email");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.value.trim())) {
      valid = false;
      errorEmail.textContent =
        "Por favor ingrese un correo electrónico válido.";
    } else {
      errorEmail.textContent = "";
    }

    // Contraseña
    const password = document.getElementById("password");
    const errorPassword = document.getElementById("error-password");
    if (password.value.trim() === "") {
      valid = false;
      errorPassword.textContent = "Por favor ingrese una contraseña.";
    } else if (password.value.length < 6) {
      valid = false;
      errorPassword.textContent =
        "La contraseña debe tener al menos 6 caracteres.";
    } else {
      errorPassword.textContent = "";
    }

    // Fecha de nacimiento
    const birthdate = document.getElementById("birthdate");
    const errorBirthdate = document.getElementById("error-birthdate");
    if (birthdate.value.trim() === "") {
      valid = false;
      errorBirthdate.textContent = "Por favor ingrese su fecha de nacimiento.";
    } else {
      errorBirthdate.textContent = "";
    }

    // Sede seleccionada
    const sedes = document.getElementById("sedes");
    const errorSedes = document.getElementById("error-sedes");
    if (sedes.value.trim() === "") {
      valid = false;
      if (!errorSedes) {
        const newErrorSedes = document.createElement("div");
        newErrorSedes.classList.add("error");
        newErrorSedes.id = "error-sedes";
        newErrorSedes.textContent = "Por favor seleccione una sede.";
        sedes.parentNode.appendChild(newErrorSedes);
      }
    } else if (errorSedes) {
      errorSedes.remove();
    }

    // Términos y condiciones
    const terms = document.getElementById("terms");
    const errorTerms = document.getElementById("error-terms");
    if (!terms.checked) {
      valid = false;
      if (!errorTerms) {
        const newErrorTerms = document.createElement("div");
        newErrorTerms.classList.add("error");
        newErrorTerms.id = "error-terms";
        newErrorTerms.textContent = "Debe aceptar los términos y condiciones.";
        terms.parentNode.appendChild(newErrorTerms);
      }
    } else if (errorTerms) {
      errorTerms.remove();
    }

    if (!valid) {
      event.preventDefault();
    }
  });
});

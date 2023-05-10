// Obtener el formulario y los campos
const form = document.querySelector('.c-form');
const name = document.getElementById('name');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const direccion = document.getElementById('direccion');
const num = document.getElementById('num');
const cp = document.getElementById('cp');
const provincia = document.getElementById('provincia');
const ciudad = document.getElementById('ciudad');


// Validar los campos del formulario
form.addEventListener('submit', (e) => {
  
var ok = true;

  // Validar nombre y apellido
  const nameRegex = /^[a-zA-Z ]{2,20}$/;
  if (!nameRegex.test(name.value)) {
    e.preventDefault();
    alert('Por favor, ingrese un nombre válido');
    ok == false;
  }
  if (!nameRegex.test(lastname.value)) {
    e.preventDefault();
    alert('Por favor, ingrese un apellido válido');
    ok == false;
  }

  // Validar correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    e.preventDefault();
    alert('Por favor, ingrese un correo electrónico válido');
    ok == false;
  }

  // Validar dirección, número y código postal
  const direccionRegex = /^[a-zA-Z0-9\s,'-]*$/;
  if (!direccionRegex.test(direccion.value)) {
    e.preventDefault();
    alert('Por favor, ingrese una dirección válida');
    ok == false;
  }
  const numRegex = /^[0-9]{7,14}$/;
  if (!numRegex.test(num.value)) {
    e.preventDefault();
    alert('Por favor, ingrese un número');
    ok == false;
  }
  const cpRegex = /^[0-9]{4}$/;
  if (!cpRegex.test(cp.value)) {
    e.preventDefault();
    alert('Por favor, ingrese un código postal válido');
    ok == false;
  }

  // Validar provincia y ciudad
  const provinciaRegex = /^[a-zA-Z\s]*$/;
  if (!provinciaRegex.test(provincia.value)) {
    e.preventDefault();
    alert('Por favor, ingrese una provincia válida');
    ok == false;
  }
  if (!provinciaRegex.test(ciudad.value)) {
    e.preventDefault();
    alert('Por favor, ingrese una ciudad válida');
    ok == false;
  }

  if (ok) {
    alert('El envio se realizo correctamente');
  }
});

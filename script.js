const formulario = document.getElementById('formulario');
const nombreInput = document.getElementById('nombre');
const correoInput = document.getElementById('correo');
const asuntoInput = document.getElementById('asunto');
const mensajeInput = document.getElementById('mensaje');
const expresion=/^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+.+\.[a-zA-Z]$/;

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  if(nombreInput.value===""){
    alert("EL campo nombre esta vacio");
    return false;
  }else if(correoInput.value===""){
    alert("EL campo correo esta vacio");
    return false;
  }else if(expresion.test(correoInput.value)){
    alert("EL campo correo no es valido");
    return false;
  }else if(asuntoInput.value===""){
    alert("EL campo asunto esta vacio");
    return false;
  }else if(mensajeInput.value===""){
    alert("EL campo mensaje esta vacio");
    return false;
  }
  
  // Validar que todos los campos estén completos
  if (nombreInput.value && correoInput.value && asuntoInput.value && mensajeInput.value) {
    // Procesar la información del formulario
    const nombre = nombreInput.value;
    const correo = correoInput.value;
    const asunto = asuntoInput.value;
    const mensaje = mensajeInput.value;

    // Imprimir la información en la consola
    console.log('Nombre:', nombre);
    console.log('Correo electrónico:', correo);
    console.log('Asunto:', asunto);
    console.log('Mensaje:', mensaje);

    // Resetear el formulario
    formulario.reset();
  } else {
    // Mostrar una alerta si faltan campos por completar
    alert('Por favor complete todos los campos del formulario.');
  }
});
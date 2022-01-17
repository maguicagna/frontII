function obtenerDatosDelUsuario() {
    /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
    const nombre = prompt("como es tu nombre?")
    const anioNacimiento = parseInt(prompt("Año de nacimiento"));
    const currentTime = new Date();
    const anioActual = currentTime.getFullYear();
    const edad = anioActual - anioNacimiento;
    
    const city = prompt("donde naciste");
    const ulikejs = prompt("Te copa js?");

    const datos = [nombre, edad, city, ulikejs]
    return datos
    
   
  
  
  }
  console.log(obtenerDatosDelUsuario());
  /* const nombreUsuario = document.getElementById("nombre");
  const edadUsuario = document.getElementById("edad");
  const ciudadUsuario = document.getElementById("ciudad");
  const interesJsUsuario = document.getElementById("javascript");
  nombreUsuario.innerHTML = datosPersona.nombre;
  edadUsuario.innerHTML = datosPersona.edad;
  ciudadUsuario.innerHTML = datosPersona.ciudad;
  interesJsUsuario.innerHTML = datosPersona.interesPorJs; */

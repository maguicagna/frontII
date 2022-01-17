/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
  imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
  lenguajes: "HTML y CSS",
  bimestre: "1er bimestre",
},
{
  imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
  lenguajes: "Javascript",
  bimestre: "2do bimestre",
},
{
  imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
  lenguajes: "React JS",
  bimestre: "3er bimestre",
},
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Ingresa tu nombre");

  const anioActual = new Date().getFullYear();
  const anioNacimiento = prompt("Ingresa tu año de nacimiento");
  datosPersona.edad = anioActual - anioNacimiento;

  datosPersona.ciudad = prompt("Ingresa la ciudad donde vives");

  const interesPorJs = confirm("Te interesa js?");
  if (interesPorJs) {
    datosPersona.interesPorJs = "Si";
  }
  else {
    datosPersona.interesPorJs = "No"
  }

}


function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

  document.getElementById("nombre").innerHTML = datosPersona.nombre;
  document.getElementById("edad").innerHTML = datosPersona.edad;
  document.getElementById("ciudad").innerHTML = datosPersona.ciudad;
  document.getElementById("javascript").innerHTML = datosPersona.interesPorJs;


}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  let filaMaterias = document.getElementById("fila");
  if (!(filaMaterias.hasChildNodes())){

    for (let materia of listado) {
      filaMaterias.innerHTML += 
      `<div class="caja">
      <img src="${materia.imgUrl}" alt="${materia.lenguajes}"></img>
      <p class="lenguajes">${materia.lenguajes}</p>
      <p class="bimestre">${materia.bimestre}</p>
      </div> `
  
    }
  }


}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  document.getElementById("sitio").classList.toggle("dark");


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
const sobreMi = document.getElementById("sobre-mi");
window.addEventListener("keydown", function (e) {
  if (e.key == "f") {
    sobreMi.classList.remove("oculto");
  }
});






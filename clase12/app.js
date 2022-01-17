window.addEventListener('load', function () {

    const formulario = document.querySelector('form');
    //  const formulario = ​document.forms[0];
    const inputNombre = document.querySelector('#nombre');
    const inputContrasenia = document.querySelector('#pass');
    const inputTelefono = document.querySelector('#tel');
    const cheboxHobbies = document.getElementsByName('hobbies');
    const radioButtons = document.querySelectorAll('[name=nacionalidad]');
    const mensajeNombre = document.querySelector('#mensajeNombre');


    formulario.addEventListener('submit', function (evento) {
        // frenamos el envío por defecto
        evento.preventDefault();
        console.log("SUBMIT");

        let listadoHobbies = [];
        cheboxHobbies.forEach(box => {
            if (box.checked) {
                listadoHobbies.push(box.id)
            };
        })

        let pais = "";
        radioButtons.forEach(button => {
            if (button.checked) {
                pais = button.id;
            }
        });

        //validacion
        if (!validarNombre(inputNombre.value)){
            // mostrar error al usuario
            inputNombre.classList.add("error");
            mensajeNombre.classList.remove("oculto");

        }else{
            // hay que poner este else por que si no quedaría para siempre rojo el campo
            inputNombre.classList.remove("error");
            mensajeNombre.classList.add("oculto");


        }


        //normalizacion
        console.log(normalizar(inputNombre.value, inputContrasenia.value, inputTelefono.value, listadoHobbies, pais));




    });




})

function validarNombre(nombre) {
    let resultado = true;

    // no contenga caracteres especiales o números
    let caracteresValidos = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    for (const i of nombre) {
        console.log(caracteresValidos.indexOf(i));
        if (caracteresValidos.indexOf(i) == -1) {
            resultado = false;

        }
    }

    // minimo de tres caracteres y maximo de 20
    if (nombre.length < 3 || nombre.length > 20) {
        resultado = false;
    }
    return resultado;

    /*     Tambien lo que hizo es hacerlo en una funcion aparte, 
    como validar string y de esa manera podes reutilizar el codigo 
    en otros lugares que no sea solo el form */

    /* Sacó la funcion de adentro del load para que este global y pueda acceder 
    desde consola igual lo hizo solo pa la clase */

}
function normalizar(nom, pass, tel, lista, pais) {
    const datos = {
        name: nom.toUpperCase(),
        password: pass,
        phone: parseInt(tel),
        hobbies: lista,
        country: pais
    };

    return datos;
}

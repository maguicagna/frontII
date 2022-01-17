 window.addEventListener('load', function () {

     const formulario = document.querySelector('form');
     //  const formulario = ​document.forms[0];
     const inputNombre = document.querySelector('#nombre');
     const inputContrasenia = document.querySelector('#pass');
     const inputTelefono = document.querySelector('#tel');
     const cheboxHobbies = document.getElementsByName('hobbies');
     const radioButtons = document.querySelectorAll('[name=nacionalidad]');


         formulario.addEventListener('submit', function (evento) {
             // frenamos el envío por defecto
             evento.preventDefault();
             console.log("SUBMIT");

             let listadoHobbies = [];
             cheboxHobbies.forEach( box =>{
                 if(box.checked){
                    listadoHobbies.push(box.id)
                 };
             })

             let pais = "";
             radioButtons.forEach( button =>{
                 if(button.checked){
                     pais = button.id;
                 }
             });

             //validacion


             //normalizacion
             console.log(normalizar(inputNombre.value, inputContrasenia.value, inputTelefono.value, listadoHobbies, pais));
             



         });

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



 })
const arrayContraseñas = document.querySelectorAll('[type = password]');

window.addEventListener('load', function() {
    const campoName = document.getElementById("nombre")
    const campoApellido = document.getElementById("apellido")
    const campoEmail = document.getElementById("email")
    const campoPass1 = document.getElementById("contra1")
    const campoPass2 = document.getElementById("contra2")
    const formRegister = document.forms[0];

    const apiBaseURL = "https://ctd-todo-api.herokuapp.com/v1";
    
    
    formRegister.addEventListener('submit', function(e){
        e.preventDefault();
        const respuestaForm = validacionContraseñas() && validacionCamposVacios(campoName.value) && validacionCamposVacios(campoApellido.value) && validacionCamposVacios(campoEmail.value) && validacionCamposVacios(campoPass1.value) && validacionCamposVacios(campoPass2.value);

        if (respuestaForm){
            console.log("todook");
            fetchApiNuevoUser(`${apiBaseURL}/users`,normalizacionSignUp(campoName.value, campoApellido.value, campoEmail.value, campoPass1.value))
        }
        else{
            console.log("fijate que algo esta mal");
        }

        formRegister.reset();
    })
    
    
});

let signUpApto = true;
function validacionContraseñas(){
    if (arrayContraseñas[0].value !== arrayContraseñas[1].value){
        
        signUpApto = false;
       
    }
    return signUpApto;

}


function validacionCamposVacios(campo){
    if(campo == ""){
        signUpApto = false;
       

    }
    return signUpApto;
    
    
}

function normalizacionSignUp(firstName, lastName, email, password){
    const nuevoUser = {
        firstName : firstName.trim(),
        lastName : lastName.trim(),
        email : email.toLowerCase().trim(),
        password : password.trim()
    }
     
    return nuevoUser;
}

function fetchApiNuevoUser(url, payload){

    const settings = {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(payload)
    }

    fetch(url,settings)
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('token',data.jwt);
        location.href = '/mis-tareas.html';
    })

}


window.addEventListener('load', function(){

    const formSignIn =  document.forms[0];
    const campoEmail = document.getElementById("inputEmail");
    const campoPassword = document.getElementById("inputPassword");

    const apiBaseURL = "https://ctd-todo-api.herokuapp.com/v1";

    formSignIn.addEventListener('submit', function(e){
        e.preventDefault();

        let respuestaCampos = validarCamposNoVacios(campoEmail.value) && validarCamposNoVacios(campoPassword.value);
        if (respuestaCampos){
            normalizarSignIn(campoEmail.value, campoPassword.value);

            apiLogin(`${apiBaseURL}/users/login`, normalizarSignIn(campoEmail.value, campoPassword.value));

        }
        else{
            console.log("Hay algo que esta mal");
        }



        formSignIn.reset();
    })



});

let formApto = true;

function validarCamposNoVacios(campo){
    if (campo === ""){
        formApto =false;

    }
    
    return formApto;

}

function normalizarSignIn(email, password){
    const datosLogin = {
        email: email.toLowerCase().trim(),
        password: password.trim()
    }

    return datosLogin;

}

function apiLogin(url, payload){
    
    const settings = {
        method :'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(payload) 

    }

    fetch(url, settings)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // CHEQUEAMOS QUE EL USUARIO EXISTA CON VIENDO QUE HAYA TOKEN
        if(data.jwt){
            // GUARDO EL TOKEN EL LOCAL STORAGE
            localStorage.setItem('token',data.jwt);

            // REDIRIJO LA PAGINA A LA PAGINA PRINCIPAL
            location.href = '/mis-tareas.html';
        }
    })
}


window.addEventListener('load', function(){
    const apiBaseURL = "https://ctd-todo-api.herokuapp.com/v1";
    const token = localStorage.getItem("token");
    const newTaskForm = document.forms[0];
    const campoNewTask = document.getElementById("nuevaTarea");
    const botonCerrarSesion = document.getElementById("closeApp");


    getUser(token, apiBaseURL);
    getTasks(token, apiBaseURL);
    

    newTaskForm.addEventListener('submit', function(e){
        e.preventDefault();

        const nuevaTarea = {
            description: campoNewTask.value,
            completed: false
        }
        makeTask(apiBaseURL,token,nuevaTarea);
        
        
        
        newTaskForm.reset();


    })

    botonCerrarSesion.addEventListener('click',function(){
        location.href = "/"
        localStorage.clear();
    })


    

});

function getUser(authorization, url){
    
    const settings = {
        method :'GET',
        headers : {
            'authorization': authorization
        }
    }
    
    const user = document.getElementById("user");

    fetch(`${url}/users/getMe`, settings)
    .then(response => response.json())
    .then(data => {
        nombre = data.firstName;
        user.innerHTML = `<p>${nombre}</p>`;

    
    });
    
}

function getTasks(authorization, url){

    const settings = {
        method :'GET',
        headers : {
            'authorization': authorization
        }
    }

    fetch(`${url}/tasks`, settings)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        renderizadoDeTareas(data);
    });


}

function makeTask(url, authorization, payload){
    const settings = {
        method: 'POST',
        headers: {
            authorization: authorization,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }

    fetch(`${url}/tasks`, settings)
    .then( respueta => respueta.json())
    .then( data => {
        console.log(data);
    })

}

function renderizadoDeTareas(listado){
    const tareasTerminadas = document.querySelector(".tareas-terminadas");
    const tareasPendientes = document.querySelector(".tareas-pendientes");

    tareasTerminadas.innerHTML = "";
    tareasPendientes.innerHTML = "";


    listado.forEach(tarea => {

        if(tarea.completed){
            tareasTerminadas.innerHTML += 
            `<li class="tarea">
                <div class="done"></div>
                <div class="descripcion">
                    <p class="nombre">${tarea.description}</p>
                <div>
                <button><i id="${tarea.id}" class="fasfa-undo-alt change"></i></button>
                <button><i id="${tarea.id}" class="farfa-trash-alt"></i></button>
                </div>
                </div>
            </li>`;
        }
        else{
            tareasPendientes.innerHTML +=
            `<li class="tarea">
                <div class="not-done change" id="${tarea.id}"></div>
                <div class="descripcion">
                    <p class="nombre">${tarea.description}</p>
                    <p class="timestamp"><i class="farfa-calendar-alt"></i> ${tarea.createdAt}</p>
                </div>
            </li>`

        }
        
    });

}



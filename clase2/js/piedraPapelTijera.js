let opciones = ["piedra", "papel", "tijera"];
let desafio = alert("Te desafío a un juego de Piedra, Papel o Tijera")
let scoreUsuario = 0 ;
let scoreComputadora = 0 ;

function jugar(){

    let usuario = prompt("Elegí piedra, papel o tijera");
    let computadora = opciones[parseInt(Math.random() * 3)];
    
    if(usuario == computadora) {
        console.log(`Empate. ${scoreUsuario} - ${scoreComputadora}`)
    } else {
        switch(usuario){
            case "piedra":
                if(computadora == "papel") {
                    scoreComputadora++;
                    console.log(`Perdiste. ${scoreUsuario} - ${scoreComputadora}`)
                } else {
                    scoreUsuario++;
                    console.log(`Ganaste. ${scoreUsuario} - ${scoreComputadora}`)
                }
                break;
            case "papel":
                if(computadora == "piedra") {
                    scoreUsuario++;
                    console.log(`Ganaste. ${scoreUsuario} - ${scoreComputadora}`)
                } else {
                    scoreComputadora++;
                    console.log(`Perdiste. ${scoreUsuario} - ${scoreComputadora}`)
                }
                break;
            case "tijera":
                if(computadora == "piedra") {
                    scoreComputadora++;
                    console.log(`Perdiste. ${scoreUsuario} - ${scoreComputadora}`)
                } else {
                    scoreUsuario++;
                    console.log(`Ganaste. ${scoreUsuario} - ${scoreComputadora}`)
                }
                break;
    
    
        }
    }

    desafio = confirm("Queres jugar de vuelta?");
    return desafio;
}


do{
    jugar();
    
}while(desafio);




/* if(usuario == computadora) {
    console.log("Hey! Esto es un empate")
} else {
    if(usuario == "piedra") {
        if(computadora == "papel") {
            console.log("Perdiste 😪")
        } else {
            console.log("Ganaste")
        }
    }
        
    if(usuario == "papel") {
        if(computadora == "piedra") {
            console.log("Ganaste")
        } else {
            console.log("Perdiste 😪")
        }
    }
        
    if(usuario == "tijera") {
        if(computadora == "piedra") {
            console.log("Perdiste 😪")
        } else {
            console.log("Ganaste")
        }
    }
} */



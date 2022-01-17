let unArray = ["Leia", "Organa", 29];

let unObjeto = {
    nombre: "Leia",
    apellido: "Organa",
    edad: 29,
    nacimiento: "Cali"
}

// for(let propiedad in unObjeto) {
//     console.log( "Mi " + propiedad + " es " +  unObjeto[propiedad])
// }

for(let valor of unArray) {
    console.log(valor)
}
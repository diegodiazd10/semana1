// DOM - Document Objet Model

let btnPrueba= document.getElementById("btnPrueba");
let tituloPagina = document.getElementById("tituloPagina");
const mensajeAlerta = () =>{
    console.log("Prueba")
}

//Onclicks
btnPrueba.onclick = function () {
    mensajeAlerta();
}

tituloPagina.onclick = function() {
    mensajeAlerta();
}
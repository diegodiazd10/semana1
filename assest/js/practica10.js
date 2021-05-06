
let btnPrueba = document.getElementById("btnPrueba");
const spamLInk = () => {
    for (let i = 0; i <= 5; i++) {
        window.open("https://es.wikipedia.org/wiki/Wikipedia:Portada");        
    }
}

btnPrueba.addEventListener("click", () => {
    spamLInk();
})
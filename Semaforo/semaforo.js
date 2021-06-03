const img = document.getElementById("img");
const buttons = document.getElementById("buttons");
let colorindex = 0;
let intervalID = null;

const trafficligth = (event) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = () => {

    //colorindex = colorindex < 2 ? ++colorindex : 0; //ou da para usar assim tambem.

    if (colorindex < 2){
        colorindex++
    }
    else {
        colorindex = 0;
    }
}

const trocadecor = () => {
    const cores = ["vermelho", "verde", "amarelo"]
    const color = cores[colorindex ];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval (intervalID);
}

const turnOn = {
    "amarelo": () => img.src = "./img/amarelo.png",
    "verde": () => img.src = "./img/verde.png",
    "vermelho": () => img.src = "./img/vermelho.png",
    "automatico": () => intervalID = setInterval(trocadecor, 1000),
}

buttons.addEventListener("click", trafficligth);
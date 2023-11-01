const selecButton = document.querySelector("#btn2");

const unoColor = document.querySelector('.unoColor')
const parrafoUno = document.querySelector(".unoParrafo");

const dosColor = document.querySelector('.dosColor')
const parrafoDos = document.querySelector(".dosParrafo");

const tresColor = document.querySelector('.tresColor')
const parrafoTres = document.querySelector(".tresParrafo");

const cuatroColor = document.querySelector('.cuatroColor')
const parrafoCuatro = document.querySelector(".cuatroParrafo");

function randomColorHex () {
    let colorHex = '#';
    const baseColor = '0123456789ABCDEF'
    for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 16);
    colorHex += baseColor[randomNumber];
    }
    return colorHex;
}
function randomColor(){
    const accederColor = [unoColor,dosColor,tresColor,cuatroColor];
    const accederParrafo = [parrafoUno, parrafoDos, parrafoTres, parrafoCuatro]

    for (let i = 0; i < 4; i++) {
        let NewColorHex = randomColorHex();
        accederColor[i].style.backgroundColor = NewColorHex;
        accederParrafo[i].textContent=NewColorHex;
    }
}

selecButton.addEventListener('click', randomColor);


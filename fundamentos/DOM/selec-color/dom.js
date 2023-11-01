// generar color manualmente

const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

let valorRojo = inputRojo.value;
let valorVerde = inputVerde.value;
let valorAzul = inputAzul.value;

console.log(valorRojo);

textoRojo.innerText = valorRojo;
textoVerde.innerText = valorVerde;
textoAzul.innerText = valorAzul;

function actualizarColor (rojo, verde, azul){
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.background = colorRGB;
};


inputRojo.addEventListener('change' ,(e) => {
    valorRojo = e.target.value;
    textoRojo.innerText = valorRojo;
    actualizarColor( valorRojo, valorVerde, valorAzul);
} );

inputVerde.addEventListener('change' ,(e) => {
    valorVerde = e.target.value;
    textoVerde.innerText = valorVerde;
    actualizarColor( valorRojo, valorVerde, valorAzul);
} );

inputAzul.addEventListener('change' ,(e) => {
    valorAzul = e.target.value;
    textoAzul.innerText = valorAzul;
    actualizarColor( valorRojo, valorVerde, valorAzul);
} );

// generar color random

const inputBtn = document.getElementById('random-color');

function randomColor(){
    // los elementos del array son una copia del elemento global
    const valorColor = [valorRojo, valorVerde, valorAzul];
    const textColor = [textoRojo, textoVerde, textoAzul];
    const inputColor = [inputRojo, inputVerde, inputAzul];

    for (let i = 0; i < valorColor.length; i++) {
        valorColor[i] = Math.floor(Math.random() * 256);
        textColor[i].innerText = valorColor[i];
        inputColor[i].value = valorColor[i];
    }
    //actualizamos los valores glovales 
    valorRojo = valorColor[0];
    valorVerde = valorColor[1];
    valorAzul = valorColor[2];

    return 0;
};
inputBtn.addEventListener('click', (e)=>{
    randomColor();
    actualizarColor(valorRojo, valorVerde, valorAzul);
});
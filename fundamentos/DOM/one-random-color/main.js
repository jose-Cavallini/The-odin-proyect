const selecButton = document.querySelector("#btn2");
const selecParrafo = document.getElementById("color");


function randomColor(){
    let color = '#';
    const baseColor = '0123456789ABCDEF'
    for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 16);
    color += baseColor[randomNumber];
    }
    console.log(color);

    selecParrafo.textContent = color;
    document.body.style.backgroundColor = color;


    
}
selecButton.addEventListener('click', randomColor);


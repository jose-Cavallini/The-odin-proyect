// selectors-herramientas 
const selecColor = document.getElementById('paleta');
const ModeColor = document.getElementById('selec-color');

const randomColor = document.getElementById('random-color') ;
const deleteColor = document.getElementById('default-color') ;

const deleteAllColor = document.getElementById('clear-grid') ;
const selecAllColor = document.getElementsByClassName("pixel")

const textDimencion = document.getElementById('text-value-range') ;
const dimencionGrid = document.getElementById('sizeSlider');

const grid = document.getElementById('paint')


// default
const DEFAULT_COLOR = '#333333';
const DEFAULT_MODE = "none";
const DEFAULT_VALUE = dimencionGrid.value;

// valor inicial
let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_VALUE;

// text range inicial

// event to tools
selecColor.oninput = (e) => NewRGB(e.target.value);
ModeColor.onclick = () => selecBtn("color");
randomColor.onclick = () => selecBtn("modeArcoiris");
deleteColor.onclick = () => selecBtn("borrarPixel");

dimencionGrid.addEventListener('mousemove', txtValueRange);
dimencionGrid.addEventListener('change', newGrid);
deleteAllColor.onclick = () => limpiarPizarra();

// event mouse
let mauseDown = false;
document.addEventListener('mousedown',()=> {mauseDown = true });
document.addEventListener('mouseup',()=> {mauseDown = false });


function createGrid (valueGrid){
    grid.style.gridTemplateColumns = `repeat( ${valueGrid}, 1fr )`;
    grid.style.gridTemplateRows = `repeat( ${valueGrid}, 1fr )`;
    for (let i = 0; i < valueGrid * valueGrid; i++) {
        const pixel = document.createElement ("div");
        // evento de click-mouse
        pixel.addEventListener('mousedown', newColorPixel  );
        // evento de puntero sobe un elemento
        pixel.addEventListener('mouseover', newColorPixel );

        pixel.classList.add("pixel")
        // pixel.className += "pixel";
        grid.appendChild(pixel);
    }
}

function selecBtn(key){
    const ArraySelector = [ModeColor , randomColor , deleteColor];
    for (let i = 0; i < 3; i++) {
        ArraySelector[i].style.backgroundColor = 'rgb(237, 239, 242)'; 
        ArraySelector[i].style.color = 'rgb(0, 0, 0)'; 
    }

    switch (key) {
        case "color":
            currentMode = "color";
            ModeColor.style.backgroundColor = 'rgb(70, 62, 179)';   
            ModeColor.style.color = 'rgb(255, 255, 255)';   
            break;        
        case "modeArcoiris":
            currentMode = "modeArcoiris";
            randomColor.style.backgroundColor = 'rgb(70, 62, 179)';   
            randomColor.style.color = 'rgb(255, 255, 255)';   
            break;       
        case "borrarPixel":
            currentMode = "borrarPixel";
            deleteColor.style.backgroundColor = 'rgb(70, 62, 179)';   
            deleteColor.style.color = 'rgb(255, 255, 255)';   
            break;
        default:
            limpiarPizarra();
            break;
    }
};

function NewRGB(cambioColor){
    currentColor = cambioColor;
    console.log(currentColor);
    // actualizar fondo
    actuaalizarColor(cambioColor)
    return 
};
function actuaalizarColor (fondoColor) {
    selecColor.style.backgroundColor = fondoColor;
}

function newRandomRGB () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
function newColorPixel (e){

    if ( e.type == 'mouseover' && !mauseDown ) {return};
    if ( currentMode == "none") {return};

    switch (currentMode) {
        case "color":
            e.target.style.backgroundColor = currentColor;
            break;

        case "modeArcoiris":
            let colorAleatorio = newRandomRGB();
            e.target.style.backgroundColor = colorAleatorio;
            break;
    
        case "borrarPixel":
            e.target.style.backgroundColor = 'rgb(255, 255, 255)';
            break;
    
        default:
            break;
    }
};

function limpiarPizarra(){
    console.log(selecAllColor)
    for (let i = 0; i < currentSize * currentSize; i++) {
        selecAllColor[i].style.backgroundColor = "#FFFFFF";    
    }
}

function txtValueRange (){
    currentSize = dimencionGrid.value;
    textDimencion.innerText = `${currentSize} X ${currentSize}`;

}

function newGrid (e) {
    currentSize = dimencionGrid.value;
    grid.innerHTML = "";
    createGrid(currentSize);
};

window.onload = () => {
    createGrid(currentSize);
    textDimencion.innerText = `${DEFAULT_VALUE} X ${DEFAULT_VALUE}`;
    selecColor.style.backgroundColor = currentColor;

};



let tablero;
let filaPieza;
let columPieza;
let rotPieza;
let piezaActual; //pieza sera un lenght de PIEZAS declarando que pieza se creara
let record=0;  //almacena la mejor puntuación
let lineas=0;   //almacena la  puntuación actual

let pos = [ // valores de referencia de las condenadas relativas
    
    //  [_, 6, 3, _]
    //  [7, 5, 0, 1]
    //  [_, 4, 2, _]

    [0,0], // 0
    [0,1], // 1
    [-1,0], // 2
    [1,0], // 3
    [-1,-1], // 4 
    [0,-1], // 5
    [1,-1], // 6 
    [0,-2], // 7
];

let piezas = [
    //disenio de las piezas. total 8
    // el primer elemeto del array repesenta la cantidad de rotaciones
    [4,0,1,2,3], // T
    [4,0,1,5,6], // L |__
    [4,0,1,5,4], // ;--
    [2,0,1,5,7], // ----
    [2,0,2,5,6], // '-, 
    [2,0,3,5,4], // ,-' 
    [1,0,5,6,3], // [] 
];

// funcion Armar tablero al iniciar nueva parda

function armarTablero(){
    velocidad = 50000;
    tablero = new Array(20) // tablero de 20 filas

    for (let n =0 ; n < 20 ; n++  ){
        tablero[n] = new Array(9);
        for (let m =0 ; m < 9 ; m++){
            tablero[n][m] = 0 ;
        }
    }
    nuevaPieza()
    lineas = 0; 
    
};
function nuevaPieza(){
    columPieza = 3;
    filaPieza =0;
    rotPieza = 0;
    piezaActual = Math.floor(Math.random()*7);
    
}

function cuadroNoDisponible (f,c){
    // no hay colision
    if (f < 0) {return false};
    // si hay colision
    return (c < 0 || c >= 9 || f >= 20 || tablero[f][c] > 0);    
}

function colisionaPieza (){
    for (let v = 1 ; v < 5 ; v++){
        let des = piezas[piezaActual][v];
        let pos2 = rotarCasilla(pos[des]);// almacena un array de la pos rotada
        if(cuadroNoDisponible(pos2[0] + filaPieza , pos2[1] + columPieza)){
            return true;
        }
    }
    return false;
}
function detectarLineas(){
    for ( let f=0 ;f < 20 ; f++){
        let contarCeldas = 0;
        for (let c = 0 ; c<9 ; c++) {
            if ( tablero[f][c] > 0){
                contarCeldas++;
            }
        }
        if (contarCeldas == 9){
            for (let f2 = f; f2 > 0; f2--) {
                for (let c2 = 0 ; c2 < 9 ; c2 ++){
                    tablero [f2][c2] = tablero [f2 - 1][c2]; 
                }                
            }
            lineas++;
        }

    }
}
function bajarPieza(){
    filaPieza++;
    if(colisionaPieza()){
        filaPieza --;
        for (let v=1 ; v < 5; v++ ){
            let des = piezas[piezaActual][v];
            let pos2 = rotarCasilla(pos[des]);
            if (pos2 [ 0 ] +filaPieza >= 0 && pos2 [ 0 ] +filaPieza < 20 &&
                pos2 [ 1 ] +columPieza >=0 && pos2 [ 1 ] +columPieza < 9){
                tablero[pos2 [ 0 ] +filaPieza][pos2 [ 1 ] +columPieza]=piezaActual+1;
            }

        }
        
        detectarLineas();
        let reiniciar = 0;
        for (let col = 0 ; col < 9 ; col++ ){
            if (tablero[0][col] != 0 ) {
                reiniciar = 1;
            }
            
        } 
        if (reiniciar == 1){
            if(lineas > record){
                record= lineas;
            }
            armarTablero();
            lineas = 0;
        }else{
            nuevaPieza();
        }
    }

}


function moverPieza(des){
    columPieza += des;
    if (colisionaPieza()) {
        columPieza -=des;
    }  
}
function rotarPieza(){
    rotPieza++;
    if(rotPieza == piezas[piezaActual][0] ){

    }
    if (colisionaPieza()) {
        rotPieza--;
        if(rotPieza == -1){
            rotPieza = piezas[piezaActual][0] - 1;
        }
    }
}

function rotarCasilla(celda){
    let pos2 = [celda[0], celda[1]]
    for (let n=0; n < rotPieza ; n++){
        let f = pos2[1];
        let c = - pos2[0];
        pos2[0] = f;
        pos2[1] = c;
    }
    return pos2;
}


//Ejecución principal del juego, realiza la animación y repinta
function tick(){
    bajarPieza();
    pintar();
    setTimeout('tick()', velocidad/100);
    }

//Pinta el tablero (lo genera con html) y lo plasma en un div.
function pintar(){
    let lt=" <";
    let des;
    let html="<table class='tetris'>"
    for (let f=0;f < 20;f++){
        html+="<tr>";
        for (let c=0;c < 9;c++){
            let color=tablero[f][c];
            if(color == 0){
                for (let v = 1; v < 5; v++) {
                    des = piezas[piezaActual][v];
                    let pos2= rotarCasilla(pos[des]);
                    if(f == filaPieza + pos2[0] && c == columPieza + pos2[1] ){
                        color = piezaActual + 1;
                    }
                }
            }
            html+="<td class='celda" + color + "'/>";        
        }
        html+=lt+"/tr>";
    }
    html+=lt+"/table>";
    html+="<br />Lineas : " + lineas;
    html+="<br />Record : " + record;
    document.getElementById('tetris').innerHTML=html;
            velocidad=Math.max(velocidad-1,500);
    
}
//Al iniciar la pagina inicia el juego
function eventoCargar(){
    armarTablero();
    setTimeout('tick()', 1);
}
function tecla(e){
    let characterCode = (e && e.which)? e.which: e.keyCode;
    switch(characterCode){
        case 37:
            moverPieza(-1);
            break;
        case 38:
            rotarPieza();
            break;
        case 39:
            moverPieza(1);
            break;
        case 40:
            bajarPieza();
            break;
 
    }
    pintar();
}

// ["piedra", "papel", "tijera"] == [1,2,3]
let casos = ["piedra", "papel", "tijera"];
let contPayer = 0;
let contComputer = 0;
let casosNumber;
let table = [
    // filas es el payer y columnas es computer
    ["empate","lose","win"],
    ["win","empate","lose"],
    ["lose","win","empate"],
];
game();
function getComputerChoice(){
    let randomNumber= Math.floor(Math.random()*3);
    if (casos[randomNumber] == "piedra") {
        return 1;
    }
    if(casos[randomNumber] == "papel"){
        return  2 ;
    }
    return 3;

};

function playRound(PlayerSelection, computerSelection){
    if (PlayerSelection == computerSelection){
        return alert ("empate")
    }
    // resolucion del ganador con IF
    // if(PlayerSelection == 1){
    //     if (computerSelection == 2) {
    //         contComputer++;
    //         return alert("perdiste esta ronda")
    //     }
    //     if (computerSelection == 3) {
    //         contPayer++;
    //         return alert("ganaste esta ronda");
    //     }
    // }
    // if(PlayerSelection == 2){
    //     if (computerSelection == 1) {
    //         contPayer++;
    //         return alert("ganaste esta ronda")
    //     }
    //     if (computerSelection == 3) {
    //         contComputer++;
    //         return alert("perdiste esta ronda");
    //     }
    // }
    // if(PlayerSelection == 3){
    //     if (computerSelection == 1) {
    //         contComputer++;
    //         return alert("perdiste esta ronda")
    //     }
    //     if (computerSelection == 2) {
    //         contPayer++;
    //         return alert("ganaste esta ronda");
    //     }
    // }
    let resultado = table[PlayerSelection - 1][computerSelection - 1];
    // obtener resultado por tabla
    // no es necesario ya que tengo los valores
    // for (let player = 1; player < 4; player++) {
        // if (PlayerSelection == player ){
            // for (let comp = 1; comp < 4; comp++) {
                // if (computerSelection == comp) {
                    // resultado = table[player - 1][comp - 1];
                // };      
            // };
        // }
    // 
    if (resultado == "win"){
        contPayer++ ;
        return alert(`Ganaste la ronda`);
    }else{
        contComputer ++;
        return alert(`perdiste la ronda`);
    }
};

function game(){
    for (let rondas = 0; rondas < 5; rondas++) {
        let computerSelection = getComputerChoice();
        let PlayerSelection = prompt();
        PlayerSelection = PlayerSelection.toLowerCase();
        for (let n = 1; n < 4; n++) {
            if(PlayerSelection == casos[n-1]){
                PlayerSelection = n;
            }
        }
        // comprueba que el valor ingresado sea correcto 
        if(PlayerSelection == 1 || PlayerSelection == 2 || PlayerSelection == 3){
            playRound(PlayerSelection, computerSelection);
        }else{
            alert("ingrese un nombre valido");
            rondas--;
        }

    }
    if(contPayer > contComputer){
        contComputer = 0;
        contPayer = 0;
        return alert("felicidades Has ganado la partida");
    }
    if(contPayer == contComputer){
        contComputer = 0;
        contPayer = 0;

        return alert("partida empatada");
    }
    contComputer = 0;
    contPayer = 0;
    return alert("Perdite la partida");
};


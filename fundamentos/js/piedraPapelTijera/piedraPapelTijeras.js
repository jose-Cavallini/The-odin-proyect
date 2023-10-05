// Iniciar partida
document.getElementById('playGame').addEventListener('click',async function() {
    NewGame();
});    

// Agregar eventos a los botones
    document.getElementById('Piedra-Player').addEventListener('click', async function() {
        await playRound(1);
    });    
    
    document.getElementById('Papel-Player').addEventListener('click', async function() {
        await playRound(2);
    });    
    
    document.getElementById('Tijera-Player').addEventListener('click', async function() {
        await playRound(3);
    });

// ["piedra", "papel", "tijera"] == [1,2,3]
let userWin = 0;
let ComputerWin = 0;
let casos = ["Piedra", "Papel", "Tijera"];
let PlayerSelection1;
let computerSelection;
let table = [
    // filas es el payer y columnas es computer
    ["empate","lose","win"],
    ["win","empate","lose"],
    ["lose","win","empate"],
];
function NewGame(){
    userWin = 0;
    ComputerWin = 0;

    document.getElementById('result').innerHTML = `GO! `;
    document.getElementById('countPlayer').textContent = `Player: ${userWin}`;
    document.getElementById('countCPU').textContent = `CPU: ${ComputerWin}`;
    



    // abilitar los botones después de que se complete el juego
    document.querySelectorAll('.selectors button').forEach(button => {
        button.disabled = false;
    });
};


function getComputerChoice(){
    let randomNumber= Math.floor(Math.random()*3);
    console.log(randomNumber)
    if (casos[randomNumber] == "Piedra") {
        return 1;
    }
    if(casos[randomNumber] == "Papel"){
        return  2 ;
    }
    return 3;

};

async function playRound(PlayerSelection){
    // obtener resultado-ronda
    computerSelection = getComputerChoice();
    console.log(computerSelection)
    PlayerSelection1 = PlayerSelection;
    const result = determinarWiner(PlayerSelection1 , computerSelection);
    // fase de imprecion em pantalla
    document.getElementById('result').innerHTML = `${result}`;
    document.getElementById('countPlayer').textContent = `Player: ${userWin}`;
    document.getElementById('countCPU').textContent = `CPU: ${ComputerWin}`;
    
    document.querySelector(`#${casos[PlayerSelection - 1]}-Player`).style.cssText = 'background-color: rgb(255, 255, 112); border: 2px solid rgb(255, 238, 0)';
    document.querySelector(`#${casos[computerSelection - 1]}-CPU`).style.cssText = '    background-color: rgb(254, 139, 139); border: 2px solid rgb(236, 65, 65);';
    
    setTimeout('deleteSelectors()', 1000);


    // verificar si es fin de juego
    if ((userWin >= 5) || (ComputerWin >=5)){
        setTimeout('endGame()',700);
        

    }

};
    
function determinarWiner (PlayerSelection , computerSelection){
    //resultado del player 
    const resultado = table[PlayerSelection - 1][computerSelection - 1];
    // actualizar contadores
    switch (resultado) {
        case 'win':
            userWin++;
            break;
        case 'lose':
            ComputerWin++;
            break;
        default: break;
    }
    return resultado;
};
function deleteSelectors(){
    document.querySelector(`#${casos[PlayerSelection1 - 1]}-Player`).style.cssText = 'background-color: rgb(255, 255, 255); border: 1px solid rgb(0, 0, 0);';

    document.querySelector(`#${casos[computerSelection - 1]}-CPU`).style.cssText = 'background-color: rgb(255, 255, 255); border: 1px solid rgb(0, 0, 0);';  
};
function endGame (){
    if (userWin > ComputerWin) {
        document.getElementById('result').innerHTML = `Ganaste el juego`;

    } else if (userWin < ComputerWin) {
        document.getElementById('result').innerHTML = `La computadora ganó el juego.`;
    } else {
        document.getElementById('result').innerHTML = `El juego terminó en empate.`;
    }
    // Deshabilitar los botones después de que se complete el juego
    document.querySelectorAll('.selectors button').forEach(button => {
        button.disabled = true;
    });
};
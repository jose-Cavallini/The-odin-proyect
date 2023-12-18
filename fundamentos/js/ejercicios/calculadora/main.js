const btnNamberOne = document.getElementById("one")
const btnNamberTwo = document.getElementById("two")
const btnNamberTree = document.getElementById("three")
const btnNamberFour = document.getElementById("four")
const btnNamberFive = document.getElementById("five")
const btnNamberSix = document.getElementById("six")
const btnNamberSeven = document.getElementById("seven")
const btnNambereight = document.getElementById("eight")
const btnNamberNine = document.getElementById("nine")
const btnNamberCero = document.getElementById("cero")

const salidaResultado = document.getElementById("resultado")

const btnSuma = document.getElementById("operador-suma")
const btnResta = document.getElementById("operador-resta")
const btnMultiplicacion = document.getElementById("operador-multiplicacion")
const btnDivicion = document.getElementById("operador-divicion")
const btnPotencia = document.getElementById("operador-potencia")
const btnFactorial = document.getElementById("operador-factorial")

const btnFloat = document.getElementById("coma")
const btnSubmit = document.getElementById("submit")
const btnDeleteAll = document.getElementById("delete")

btnNamberOne.addEventListener("click", addCaracterNumber)
btnNamberTwo.addEventListener("click", addCaracterNumber)
btnNamberTree.addEventListener("click", addCaracterNumber)
btnNamberFour.addEventListener("click", addCaracterNumber)
btnNamberFive.addEventListener("click", addCaracterNumber)
btnNamberSix.addEventListener("click", addCaracterNumber)
btnNamberSeven.addEventListener("click", addCaracterNumber)
btnNambereight.addEventListener("click", addCaracterNumber)
btnNamberNine.addEventListener("click", addCaracterNumber)
btnNamberCero.addEventListener("click", addCaracterNumber)
btnFloat.addEventListener("click" , addCaracterNumber)

btnSuma.addEventListener("click" , addOperator )
btnResta.addEventListener("click" , addOperator )
btnMultiplicacion.addEventListener("click" , addOperator )
btnDivicion.addEventListener("click" , addOperator )
btnPotencia.addEventListener("click" , addOperator )
btnFactorial.addEventListener("click" , addOperator )

btnSubmit.addEventListener("click" , calcularExprecion)
btnDeleteAll.addEventListener("click" , EleminarTodo)

let arrayNumbers = [];
let inputNuber = ""  ;
let arrayOperadors = ['+','-','X','/','^','!'];
let getFunction = [sumar, restar, multiplicar, dividir, obtenerPotencia, obtenerFactorial]
let pointerOperador ;

let BoxResultado = 0;

function addCaracterNumber (e){
    let number = e.target.innerText  
    inputNuber += number
    console.log(inputNuber)
    updateSalida(number);
};

function addOperator(e) {
    let operadorSeleccionado = e.target.innerText
    
    selecOperacion(e);
    UpdateArrayNumbers()
    updateSalida(operadorSeleccionado)
};

function selecOperacion (e) {
    let keyOperacion = e.target.innerText
    let i = 0;
    for (let i = 0; i < arrayOperadors.length; i++) {
        if (arrayOperadors[i] == keyOperacion) {
            pointerOperador = i;
        }
    }
}

function sumar (n1 , n2){
    return n1 + n2;
};
function restar (n1 , n2){
    return n1 - n2;
};
function multiplicar (a , b){
    return a * b
};
function dividir (a , b) {
    return a/b
};
function obtenerPotencia (n1 , p){
    let resulPotencia = n1;
    if (p == 0 && n1 == 0) {
         return NaN
    }else{
        if (p == 0) {
            return 1;
        }
    };

    while ( p != 1) {
        resulPotencia = resulPotencia * n1;
        p--;
    };
    
    return resulPotencia;
};
function obtenerFactorial (n){
    let resultado = 1 ;
    for(let i=1;i<=n;i++){
        resultado *= i;
    }
    return resultado;
};

function EleminarTodo (){
    arrayNumbers = [];
    BoxResultado = 0;
    eliminarDisplay();
    // pointerOperador = undefined;
};

function eliminarDisplay () {
    salidaResultado.innerText = '0';
    inputNuber = "";
}

function updateSalida(char){
    if(salidaResultado.innerText == "0" && salidaResultado.innerText.length == 1){
        salidaResultado.innerText = ""
    }
    
    salidaResultado.innerText += char   
}
    
function UpdateArrayNumbers(){
    arrayNumbers.push(inputNuber);
    inputNuber = '';
}

function calcularExprecion(e){
    UpdateArrayNumbers();
    eliminarDisplay();
    // realizar operacion
    const operadorOne = parseFloat(arrayNumbers[0]);
    const operadorTwo = parseFloat(arrayNumbers[1]);
    arrayNumbers =[];

    BoxResultado = getFunction[pointerOperador] (operadorOne , operadorTwo) + BoxResultado;
    
    updateSalida(BoxResultado);
};
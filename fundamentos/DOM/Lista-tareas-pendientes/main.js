
const getInput = document.getElementById("ingresar-tarea");
const getBtn = document.getElementById("submit-event");

const listaTareas = document.getElementById("lista-tareas");
let tareasArray = [];
// getBtn.addEventListener('click', () => {
//     const inputValue = getInput.value;
//     console.log(inputValue)
//     if (inputValue !== ''){
//         let newTask = {
//             task: inputValue,
//             completed: false,
//             eliminar: false,
//         }
//         tareasArray.push(newTask);
//         limpiarLista();
//         renderList();
//     } else {
//         alert('Ingresa una tarea');}
// });

// function renderList(){
//     //console.log(tareasArray)
//     for (let i=0;i<tareasArray.length;i++){
//         const liElemento = document.createElement('li')
//         const spanTexto = document.createElement('span')
//         const boxButton = document.createElement('div')
//         const checkboxCompletada = document.createElement('input')
//         checkboxCompletada.type="checkbox"
//         const deteleTarea = document.createElement('div')
//         deteleTarea.innerText = "X"
//         spanTexto.textContent = `${tareasArray[i].task}`
//         boxButton.appendChild(checkboxCompletada)
//         boxButton.appendChild(deteleTarea)
//         deteleTarea.classList.add("box-delete")
//         boxButton.classList.add ("tarea-pendiente-caja")
        
//         liElemento.appendChild(spanTexto)
//         liElemento.appendChild(boxButton)
//         liElemento.classList.add ("tarea-pendiente")
//         listaTareas.append(liElemento)    
//     }
// }
getBtn.addEventListener("click", agregarTarea);
getInput.addEventListener('keydown' , (e)=>{
    if(e.code === 'Enter'){
        agregarTarea();
    }
});

function agregarTarea() {
    const inputValue = getInput.value;
    console.log(getInput.value)
    if (inputValue == "") {
        alert('Ingresa una tarea')
        return;
    }
    // box tarea
    const liElemento = document.createElement('li')
    // elements-tarea
    const spanTexto = document.createElement('span')
    const boxButton = document.createElement('div')
    // elemens-boxbutton
    const completed = document.createElement('input')
    completed.addEventListener("click" , () => {completarTarea(spanTexto)})
    completed.type="checkbox"

    const deteleTarea = document.createElement('div')
    deteleTarea.addEventListener("click" , ()=>{eliminarTarea(liElemento)})
    deteleTarea.innerText = "X"
    
    spanTexto.textContent = `${inputValue}`
    // spanTexto.classList.add("tarea-completada")
    boxButton.appendChild(completed)
    boxButton.appendChild(deteleTarea)
    deteleTarea.classList.add("box-delete")
    boxButton.classList.add ("tarea-pendiente-caja")

    liElemento.appendChild(spanTexto)
    liElemento.appendChild(boxButton)
    liElemento.classList.add ("tarea-pendiente")
    listaTareas.append(liElemento)
    return
}
function completarTarea(spanTexto){    
    if(spanTexto.classList.contains("tarea-completada")){
        spanTexto.classList.remove("tarea-completada");
    }else{
        spanTexto.classList.add("tarea-completada");
    }
}
function eliminarTarea (liElemento){
    liElemento.remove();
}

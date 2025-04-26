let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto) {//aqui los parametros 
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;//se coloca como buena practica
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);//una detallada explicacion aqui porfavor           
    console.log(intentos);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja()
    };
    return;//se coloca como buena practica
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;//que es math aqui Gracias 
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Su ya sorteamos todos los números 
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p","Ya de sortearon todos los números posibles");
    } else {
        //si el número generado está en la lista haacemso una operación sino hacemos otra   
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}
function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto1");//como se llama esto una explicacion 
    asignarTextoElemento("p", `Indica un número de 1 al ${numeroMaximo}`);//lo mismo aqui gracias 
    // Generar el numero aleatorio 
    numeroSecreto = generarNumeroSecreto();
    // Iniciar el número intentos
    intentos = 1;
}
function reiniciarJuego() {
    //limpiar caja 
    limpiarCaja()
    //indicar mensaje de itervalo de números
    // Generar el numero aleatorio 
    // Iniciar el número intentos
    condicionesIniciales()
    // Deshabilitar el botón de nuevo juego 
    document.querySelector("#reiniciar").setAttribute("disabled", "true");


}
condicionesIniciales()

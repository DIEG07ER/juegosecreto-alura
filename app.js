let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    console.log(intentos);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `¡Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute("disabled");
    } else if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'El número secreto es menor');
    } else {
        asignarTextoElemento('p', 'El número secreto es mayor');
    }
    intentos++;
    limpiarCaja(); // Llamada a limpiarCaja
}

function condicionesIniciales() {
    asignarTextoElemento('#h1', 'JUEGO DEL NÚMERO SECRETO');
    asignarTextoElemento('#h2', 'Indica un número del 1 al 10');
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

// ... (otras funciones)

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * 10) + 1; // Número entre 1 y 10

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

condicionesIniciales(); // Llamada al inicio del juego

const minInput = document.querySelector('#minimo');
const maxInput = document.querySelector('#maximo');
const caja = document.querySelector('.numeros');

let previousNumber = null;

function generateRandomNumber() {
    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);

    let numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;

    while (numeroRandom === previousNumber) {
        numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    previousNumber = numeroRandom;

    document.querySelector('#resultado').innerText = `Número Aleatorio: ${numeroRandom}`;
    saveGeneratedNumbers(numeroRandom);
}

function saveGeneratedNumbers(numero) {
    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = numero;
    caja.appendChild(nuevoParrafo);
}

document.querySelector('#generar').addEventListener('click', generateRandomNumber);
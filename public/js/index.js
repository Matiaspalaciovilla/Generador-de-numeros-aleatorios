const minInput = document.querySelector('#minimo');
const maxInput = document.querySelector('#maximo');
const caja = document.querySelector('.numeros');

function generateRandomNumber() {
    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);
    const numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    document.querySelector('#resultado').innerText = `Número Aleatorio: ${numeroRandom}`;
    saveGeneratedNumbers(numeroRandom);
}

function saveGeneratedNumbers(numero) {
    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = numero;
    caja.appendChild(nuevoParrafo);
}

document.querySelector('#generar').addEventListener('click', generateRandomNumber);
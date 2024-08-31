const minInput = document.querySelector("#minimo");
const maxInput = document.querySelector("#maximo");
const caja = document.querySelector(".numeros");
const generatedNumbers = new Set();

function generateRandomNumber() {
  const min = parseInt(minInput.value);
  const max = parseInt(maxInput.value);

  if (generatedNumbers.size >= max - min + 1) {
    alert("No hay más estudiantes disponibles para el aséo 🧹");
    return;
  }

  let numeroRandom;
  do {
    numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (generatedNumbers.has(numeroRandom));

  generatedNumbers.add(numeroRandom);
  document.querySelector("#resultado").innerText = `Número Aleatorio: ${numeroRandom}`;
  saveGeneratedNumbers(numeroRandom);
}

function saveGeneratedNumbers(numero) {
  const nuevoParrafo = document.createElement("p");
  nuevoParrafo.textContent = numero;
  caja.appendChild(nuevoParrafo);
}

document
  .querySelector("#generar")
  .addEventListener("click", generateRandomNumber);

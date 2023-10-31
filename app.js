// ¡Buena suerte!

// Un objeto que tiene 1 propiedad que se llama "slip"
//   - como valor de esa propiedad tenemos un objeto
//        - ese objeto tiene 2 propiedades
//                 -id: identificador del consejo
//                 -advice: texto del consejo

// let consejo = {"slip": { "id": 31, "advice": "Ne
// ver let your Mother cut your hair."}}

// console.log(consejo.slip.advice)

// Reto 1. Leer el README y entender lo que nos piden.
// Añade un listener al botón adecuado y muestra por consola que has hecho clic en ese botón

// Corregir 9.35
const button = document.querySelector("#get-advice-button");

async function updateNewAdvice() {
  // Reto 2. Modifica la función updateNewAdvice para que haga una petición GET a la URL adecuada. De momento, muestra todo lo que devuelve la API por consola (console.log de la respuesta).

  // Corregir 10:00. Contestad también al apartado Preguntas de auto evaluación del README.md

  const response = await fetch("https://api.adviceslip.com/advice");

  const randomAdvice = await response.json();

  // Reto 3: Coloca el texto del consejo y su ID en el nodo del DOM adecuado Corregir: 10.30

  console.log("Nuevo consejo!", randomAdvice);
  document.querySelector("#advice-id").textContent = randomAdvice.slip.id;
  document.querySelector(".card__quote").textContent = randomAdvice.slip.advice;
}

button.addEventListener("click", updateNewAdvice);

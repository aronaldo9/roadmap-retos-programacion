/*
 * EJERCICIO:
 * Implementa los mecanismos de introducción y recuperación de elementos propios de las
 * pilas (stacks - LIFO) y las colas (queue - FIFO) utilizando una estructura de array
 * o lista (dependiendo de las posibilidades de tu lenguaje).
 *
 * DIFICULTAD EXTRA (opcional):
 * - Utilizando la implementación de pila y cadenas de texto, simula el mecanismo adelante/atrás
 *   de un navegador web. Crea un programa en el que puedas navegar a una página o indicarle
 *   que te quieres desplazar adelante o atrás, mostrando en cada caso el nombre de la web.
 *   Las palabras "adelante", "atrás" desencadenan esta acción, el resto se interpreta como
 *   el nombre de una nueva web.
 * - Utilizando la implementación de cola y cadenas de texto, simula el mecanismo de una
 *   impresora compartida que recibe documentos y los imprime cuando así se le indica.
 *   La palabra "imprimir" imprime un elemento de la cola, el resto de palabras se
 *   interpretan como nombres de documentos.
 */

// Ejercicio

// Pila(stack - LIFO -> last in, first out )
let stack = [];

// push
stack.push("1");
stack.push("2");
stack.push("3");

// pop
// stack.splice(stack.length - 1);
stack.pop();
console.log(stack);

// Cola(queue - FIFO -> first in, first out)
let queue = [];

// enqueue(push)
queue.push("1");
queue.push("2");
queue.push("3");

// dequeue(shift)
queue.shift();
console.log(queue);

// Dificultad extra
function webNavigation() {
  let stack = [];

  while (true) {
    let action = prompt(
      "Añade una url o interactúa con palabras adelante/atrás/salir: "
    );

    if (action === "salir") {
      console.log("Saliendo del navegador web.");
      break;
    } else if (action === "adelante") {
      // La funcionalidad de "adelante" normalmente requeriría otra estructura, como una pila para historial "adelante".
      console.log("Funcionalidad de 'adelante' no implementada.");
    } else if (action === "atrás") {
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      stack.push(action);
    }

    if (stack.length > 0) {
      console.log(`Has navegado a la web: ${stack[stack.length - 1]}.`);
    } else {
      console.log("Estás en la página de inicio.");
    }
  }
}

webNavigation();

function sharedPrinted() {
  let queue = [];

  while (true) {
    let action = prompt("Añade un documento o selecciona imprimir/salir: ");

    if (action === "salir") {
      console.log("Saliendo de la cola de impresión.");
      break;
    } else if (action === "imprimir") {
      if (queue.length > 0) {
        console.log(`Imprimiendo: ${queue.shift()}`);
      } else {
        console.log("No hay documentos en la cola para imprimir.");
      }
    } else {
      queue.push(action);
    }

    console.log(`Cola de impresión: ${queue.join(", ")}`);
  }
}

sharedPrinted();

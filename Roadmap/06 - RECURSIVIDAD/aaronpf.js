/*
 * EJERCICIO:
 * Entiende el concepto de recursividad creando una función recursiva que imprima
 * números del 100 al 0.
 *
 * DIFICULTAD EXTRA (opcional):
 * Utiliza el concepto de recursividad para:
 * - Calcular el factorial de un número concreto (la función recibe ese número).
 * - Calcular el valor de un elemento concreto (según su posición) en la
 *   sucesión de Fibonacci (la función recibe la posición).
 */

function countdown(num) {
  if (num >= 0) {
    console.log(num);
    countdown(num - 1);
  }
}

countdown(100);

// Dificultad extra
function factorial(num) {
  if (num < 0) {
    console.log("Los números negativos no son válidos");
  } else if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(5));

function fibonacci(num) {
  if (num <= 0) {
    console.log("La posición tiene que ser mayor que cero");
  } else if (num === 1) {
    return 0;
  } else if (num === 2) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

console.log(fibonacci(6));

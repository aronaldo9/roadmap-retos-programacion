/*
 * EJERCICIO:
 * Explora el concepto de manejo de excepciones según tu lenguaje.
 * Fuerza un error en tu código, captura el error, imprime dicho error
 * y evita que el programa se detenga de manera inesperada.
 * Prueba a dividir "10/0" o acceder a un índice no existente
 * de un listado para intentar provocar un error.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una función que sea capaz de procesar parámetros, pero que también
 * pueda lanzar 3 tipos diferentes de excepciones (una de ellas tiene que
 * corresponderse con un tipo de excepción creada por nosotros de manera
 * personalizada, y debe ser lanzada de manera manual) en caso de error.
 * - Captura todas las excepciones desde el lugar donde llamas a la función.
 * - Imprime el tipo de error.
 * - Imprime si no se ha producido ningún error.
 * - Imprime que la ejecución ha finalizado.
 */

// Ejercicio

try {
  console.log(variableNoDefinida);
  console.log("Hola");
} catch (error) {
  console.log("Se ha producido un error", error);
}

// Dificultad extra
// Excepción personalizada
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError"; // Nombre del error personalizado
  }
}

// Función que lanza diferentes tipos de excepciones
function procesarNumero(num) {
  // Si no es un número, lanza un TypeError
  if (typeof num !== "number") {
    throw new TypeError("El parámetro debe ser un número.");
  }

  // Si es un número negativo, lanza un RangeError
  if (num < 0) {
    throw new RangeError("El número no puede ser negativo.");
  }

  // Si es 0, lanza un error personalizado
  if (num === 0) {
    throw new CustomError("El número no puede ser 0.");
  }

  // Si todo está bien, devuelve el número multiplicado por 10
  return num * 10;
}

// Llamada a la función y captura de excepciones
try {
  let resultado = procesarNumero(0); // Cambia este valor para probar diferentes excepciones
  console.log("Resultado:", resultado);
} catch (error) {
  if (error instanceof TypeError) {
    console.error("Error de tipo:", error.message);
  } else if (error instanceof RangeError) {
    console.error("Error de rango:", error.message);
  } else if (error instanceof CustomError) {
    console.error("Error personalizado:", error.message);
  } else {
    console.error("Otro tipo de error:", error.message);
  }
} finally {
  console.log("La ejecución ha finalizado.");
}

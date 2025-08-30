/*
 * EJERCICIO:
 * Crea una función que se encargue de sumar dos números y retornar
 * su resultado.
 * Crea un test, utilizando las herramientas de tu lenguaje, que sea
 * capaz de determinar si esa función se ejecuta correctamente.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un diccionario con las siguientes claves y valores:
 * "name": "Tu nombre"
 * "age": "Tu edad"
 * "birth_date": "Tu fecha de nacimiento"
 * "programming_languages": ["Listado de lenguajes de programación"]
 * Crea dos test:
 * - Un primero que determine que existen todos los campos.
 * - Un segundo que determine que los datos introducidos son correctos.
 */

function suma(a, b) {
  return a + b;
}

// Probar que la función funciona
console.log("Resultado de suma(4, 5):", suma(4, 5));

function test() {
  // Caso de prueba 1
  const resultado1 = suma(4, 5);
  if (resultado1 === 9) {
    console.log("✅ Test 1 pasado");
  } else {
    console.log("❌ Test 1 fallido");
  }

  // Caso de prueba 2
  const resultado2 = suma(-1, 1);
  if (resultado2 === 0) {
    console.log("✅ Test 2 pasado");
  } else {
    console.log("❌ Test 2 fallido");
  }
}

console.log(test());

// Extra
const datos = {
  name: "Aarón",
  age: 46,
  birth_date: "1979-07-13",
  programming_languages: ["JavaScript", "PHP", "Java"],
};

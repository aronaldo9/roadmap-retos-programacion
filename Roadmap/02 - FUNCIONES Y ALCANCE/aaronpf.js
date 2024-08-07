// FUNCIONES Y ALCANCE
/*
 * EJERCICIO:
 * - Crea ejemplos de funciones básicas que representen las diferentes
 *   posibilidades del lenguaje:
 *   Sin parámetros ni retorno, con uno o varios parámetros, con retorno...
 * - Comprueba si puedes crear funciones dentro de funciones.
 * - Utiliza algún ejemplo de funciones ya creadas en el lenguaje.
 * - Pon a prueba el concepto de variable LOCAL y GLOBAL.
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *   (y tener en cuenta que cada lenguaje puede poseer más o menos posibilidades)
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
 *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
 *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
 *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
 *
 * Presta especial atención a la sintaxis que debes utilizar en cada uno de los casos.
 * Cada lenguaje sigue una convenciones que debes de respetar para que el código se entienda.
 */

// FUNCIONES BÁSICAS

// Función sin parámetros ni retorno
function greet() {
  console.log("¡Hola, JavaScript!");
}

greet();

// Función con retorno
function return_greet() {
  return "¡Hola, JavaScript!";
}

let greeting = return_greet();
console.log(greeting);

// Función con un parámetro
function param_greet(name) {
  console.log(`¡Hola, ${name}!`);
}

param_greet("AarónPF");

// Función con varios parámetros
function params_greet(greet, name) {
  console.log(`${greet}, ${name}!`);
}

params_greet("¡Hola", "AarónPF");

// Función con parámetro por defecto
function default_param_greet(name = "AarónPF") {
  console.log(`¡Hola, ${name}!`);
}

default_param_greet("Pepe");
default_param_greet();

// Función con retorno de varios valores usando un array
function multiple_return_array() {
  return ["Hola", "JavaScript"];
}

// Desestructuración de array para asignar los valores retornados a las variables
let [greet2, name] = multiple_return_array();
console.log(greet2);
console.log(name);

// Función con retorno de varios valores usando un objeto
function multiple_return_object() {
  return { greet: "Hola", name: "JavaScript" };
}

// Desestructuración de objeto para asignar los valores retornados a las variables
let { greet: greet3, name: name2 } = multiple_return_object();
console.log(greet3);
console.log(name2);

// Función con un número variable de parámetros
function variable_params(...params) {
  for (let param of params) {
    console.log(`Hola, ${param}!`);
  }
}

variable_params("AarónPF", "Pepe", "Juan");

// Función con un número variable de argumentos con palabra clave
function variable_key_arg_greet(params) {
  for (let key in params) {
    if (params.hasOwnProperty(key)) {
      console.log(`${key} = ${params[key]}`);
    }
  }
}

variable_key_arg_greet({
  language: "JavaScript",
  name: "Aarón",
  alias: "AaronPF",
  age: 45,
});

// Funciones dentro de funciones
function outer_function() {
  function inner_function() {
    console.log("Función interna: ¡Hola, JavaScript!");
  }

  inner_function();
}

outer_function();

// Funciones ya creadas dentro del lenguaje
let texto = "Función";
console.log(texto.length); // 7

console.log("función".toUpperCase()); // "FUNCIÓN"

// VARIABLE LOCAL Y GLOBAL
const global_var = "JavaScript";
console.log(global_var);

function hello_javascript() {
  const local_var = "Hola";
  console.log(`${local_var}, ${global_var}`);
}

hello_javascript();
// console.log(local_var); // ReferenceError: local_var is not defined

// DIFICULTAD EXTRA
function print_numbers(text1, text2) {
  let count = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${text1} ${text2}`);
    } else if (i % 3 === 0) {
      console.log(text1);
    } else if (i % 5 === 0) {
      console.log(text2);
    } else {
      console.log(i);
      count++;
    }
  }
  return count;
}

// Llamada a la función con dos cadenas de texto
let count = print_numbers("Fizz", "Buzz");
console.log(`Se imprimieron números en lugar de texto ${count} veces`);

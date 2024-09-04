/*
 * EJERCICIO:
 * Muestra ejemplos de todas las operaciones que puedes realizar con cadenas de caracteres
 * en tu lenguaje. Algunas de esas operaciones podrían ser (busca todas las que puedas):
 * - Acceso a caracteres específicos, subcadenas, longitud, concatenación, repetición,
 *   recorrido, conversión a mayúsculas y minúsculas, reemplazo, división, unión,
 *   interpolación, verificación...
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que analice dos palabras diferentes y realice comprobaciones
 * para descubrir si son:
 * - Palíndromos
 * - Anagramas
 * - Isogramas
 */

// Concatenación
const str1 = "Hello";
const str2 = "World";
console.log(str1 + ", " + str2 + "!"); // Hello, World!

// Repetición
console.log(str1.repeat(3)); // HelloHelloHello
console.log(str1 * 3); // NaN

// Acceso a caracteres específicos
const str = "Hello, World!";
console.log(str[0]); // H
console.log(str[1]); // e

// Indexación
console.log(str.indexOf("o")); // 4

// Subcadenas
console.log(str.substring(0, 5)); // Hello
console.log(str.substring(2, 9)); // llo, Wo
console.log(str.substring(9)); // llo, Wo

// Longitud
console.log(str.length); // 13

// Búsqueda
console.log(str.includes("World")); // true

// Conversión a mayúsculas y minúsculas
console.log(str.toUpperCase()); // HELLO, WORLD!
console.log(str.toLowerCase()); // hello, world!

// Reemplazo
console.log(str.replace("World", "Aaron")); // Hello, Aaron!

// Division
console.log(str.split(", ")); // [ 'Hello', 'World!' ]
console.log(str.split("W")); // [ 'Hello, ', 'orld!' ]

// Eliminación de espacios
const str3 = " Hello, World! ";
console.log(str3.trim()); // Hello, World!

// Búsqueda de caracteres al principio y al final
console.log(str.startsWith("H")); // true
console.log(str.endsWith("!")); // true

// Interpolación
const name = "Aaron";
console.log(`Hello, ${name}!`); // Hello, Aaron!

// Búsqueda de posición
console.log(str.search("World")); // 7
console.log(name.search("a")); // 1

// Conteo de ocurrencias
console.log(str.split("l").length - 1); // 3

// Formateo
console.log(str.padStart(20, ".")); // ....Hello, World!
console.log(str.padEnd(20, ".")); // Hello, World!.....

// Transformación en lista de caracteres
console.log(str.split("")); // [ 'H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!' ]

// Transformación de lista a cadena
const arr = ["H", "e", "l", "l", "o"];
console.log(arr.join("")); // Hello

// Transformaciones numéricas
const num = "123";
const fl = "123.45";
console.log(Number(num)); // 123
console.log(parseInt(num)); // 123
console.log(parseFloat(fl)); // 123.45

// Verificación
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("World!")); // true
console.log(str.includes("World")); // true

// Comprobaciones varias
function isAlnum(str) {
  return /^[a-z0-9]+$/i.test(str);
}

console.log(isAlnum("Hello123")); // true
console.log(isAlnum("Hello 123")); // false (espacio no es alfanumérico)

function isAlpha(str) {
  return /^[a-z]+$/i.test(str);
}

console.log(isAlpha("Hello")); // true

function isDigit(str) {
  return /^[0-9]+$/.test(str);
}

console.log(isDigit("123")); // true

// Ejercicio extra
function check(word1, word2) {
  // Palíndromos
  console.log(
    `¿${word1} es palíndromo? ${word1 === word1.split("").reverse().join("")}`
  );
  console.log(
    `¿${word2} es palíndromo? ${word2 === word2.split("").reverse().join("")}`
  );

  // Anagramas
  console.log(
    `¿${word1} y ${word2} son anagramas? ${
      word1.split("").sort().join("") === word2.split("").sort().join("")
    }`
  );

  // Isogramas (sencillo)
  console.log(
    `¿${word1} es un isograma? ${
      word1.length === new Set(word1.split("")).size
    }`
  );
  console.log(
    `¿${word2} es un isograma? ${
      word2.length === new Set(word2.split("")).size
    }`
  );

  // Isogramas (completo)
  function isogram(word) {
    const wordDict = {};

    // Construir un objeto con el conteo de cada carácter
    for (let character of word) {
      wordDict[character] = (wordDict[character] || 0) + 1;
    }

    // Obtener los valores de ocurrencia de cada carácter
    const values = Object.values(wordDict);
    const isogramLen = values[0];

    // Verificar si todas las ocurrencias son iguales
    for (let wordCount of values) {
      if (wordCount !== isogramLen) {
        return false; // Si no son iguales, no es un isograma
      }
    }

    return true; // Si todas son iguales, es un isograma
  }

  // Ejemplo de uso con las palabras pasadas como argumentos
  console.log(`¿${word1} es un isograma?: ${isogram(word1)}`);
  console.log(`¿${word2} es un isograma?: ${isogram(word2)}`);
}

// Llamada a la función con dos palabras
check("radar", "pythonpython");
// check("roma", "amor");

/**
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 */

// OPERADORES
let a = 2;
let b = 4;

// Aritméticos
let suma = a + b;
console.log(`Suma: a + b: ${suma}`);
let resta = a - b;
console.log(resta);
let producto = a * b;
console.log(producto);
let division = b / a;
console.log(division);
let modulo = b % a;
console.log(modulo);
let potencia = a ** b;
console.log(potencia);

// Asignación
let c = 10;
c += a;
console.log(c);
c -= a;
console.log(c);
c *= a;
console.log(c);
c /= a;
console.log(c);
c %= a;
console.log(c);
c **= a;
console.log(c);

// Comparación
let d = 2;

console.log(`Igualdad: a === d es ${a === d}`);
console.log(a == d);
console.log(a !== b);
console.log(a != b);
console.log(a < b);
console.log(c > b);
console.log(a >= d);
console.log(a <= d);

// Lógicos
console.log(
  `AND &&: 3 + 3 === 6 && 7 + 7 === 14 es ${3 + 3 === 6 && 7 + 7 === 14}`
);
console.log(
  `OR ||: 3 + 3 === 6 || 8 + 7 === 14 es ${3 + 3 === 6 || 8 + 7 === 14}`
);
console.log(
  `OR ||: 3 + 2 === 6 || 8 + 7 === 14 es ${3 + 2 === 6 || 8 + 7 === 14}`
);
console.log(`NOT ||: 3 + 2 !== 6 es ${3 + 2 !== 6}`);

// Operadores de identidad
let my_number = 1.0;
let my_new_number = my_number;

console.log(`my_number is my_new_number es ${my_number === my_new_number}`);
console.log(`my_number is not my_new_number es ${my_number !== my_new_number}`);

// Operadores de pertenencia
let string = "aaron";
let char = "a";
console.log(`'${char}' está en '${string}' = ${string.includes(char)}`);

let char2 = "b";
console.log(`'${char2}' no está en '${string}' = ${!string.includes(char2)}`);

// Operadores de bit
let z = 10; // 1010
let y = 3; // 0011
console.log(`AND: 10 & 3 = ${z & y}`);
console.log(`OR: 10 | 3 = ${z | y}`);
console.log(`XOR: 10 ^ 3 = ${z ^ y}`);
console.log(`NOT: ~10 = ${~z}`);
console.log(`Desplazamiento a la derecha: 10 >> 3 = ${z >> y}`);
console.log(`Desplazamiento a la izquierda: 10 << 3 = ${z << y}`);

// ESTRUCTURAS DE CONTROL

// Condicionales
let my_string = "AaronPF";

if (my_string === "aaronpf") {
  console.log(`${my_string} es "aaronpf"`);
} else if (my_string === "AaronPF") {
  console.log(`${my_string} es "AaronPF"`);
} else {
  console.log(`${my_string} no es "aaronpf" ni "AaronPF"`);
}

// Iterativas
for (let i = 0; i < 11; i++) {
  console.log(i);
}

let v = 0;
while (v <= 10) {
  console.log(v);
  v++;
}

// Excepciones
try {
  console.log(10 / 0);
} catch (error) {
  console.log("Se ha producido un error");
} finally {
  console.log("Ha finalizado el control de excepciones");
}

/*
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */

for (let i = 10; i <= 55; i++) {
  if (i % 2 === 0 && i !== 16 && i % 3 !== 0) {
    console.log(i);
  }
}

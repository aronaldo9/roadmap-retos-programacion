/*
 * EJERCICIO:
 * - Muestra ejemplos de asignación de variables "por valor" y "por referencia", según
 *   su tipo de dato.
 * - Muestra ejemplos de funciones con variables que se les pasan "por valor" y
 *   "por referencia", y cómo se comportan en cada caso en el momento de ser modificadas.
 * (Entender estos conceptos es algo esencial en la gran mayoría de lenguajes)
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea dos programas que reciban dos parámetros (cada uno) definidos como
 * variables anteriormente.
 * - Cada programa recibe, en un caso, dos parámetros por valor, y en otro caso, por referencia.
 *   Estos parámetros los intercambia entre ellos en su interior, los retorna, y su retorno
 *   se asigna a dos variables diferentes a las originales. A continuación, imprime
 *   el valor de las variables originales y las nuevas, comprobando que se ha invertido
 *   su valor en las segundas.
 *   Comprueba también que se ha conservado el valor original en las primeras.
 */

// Tipos de dato por valor
let my_int_a = 10;
let my_int_b = my_int_a;
// my_int_b = 20;
// my_int_a = 30;
console.log(my_int_a);
console.log(my_int_b);

// Tipos de dato por referencia
let my_list_a = [10, 20];
let my_list_b = my_list_a;
my_list_b.push(30);
console.log(my_list_a);
console.log(my_list_b);

// Funciones con datos por valor
let my_int_c = 10;

function my_int_func(my_int) {
  my_int = 20;
  console.log(my_int);
}

my_int_func(my_int_c);
console.log(my_int_c);

// Funciones con datos por referencia

function my_list_func(my_list) {
  my_list.push(30);

  let my_list_d = my_list;
  my_list_d.push(40);

  console.log(my_list);
  console.log(my_list_d);
}

let my_list_c = [10, 20];
my_list_func(my_list_c);
console.log(my_list_c);

// DIFICULTAD EXTRA

// Por valor
let my_int_d = 10;
let my_int_e = 20;

function my_int_func_extra(my_int1, my_int2) {
  let temp = my_int1;
  my_int1 = my_int2;
  my_int2 = temp;

  return [my_int1, my_int2];
}

let [my_int_d_new, my_int_e_new] = my_int_func_extra(my_int_d, my_int_e);
console.log(my_int_d, my_int_e, my_int_d_new, my_int_e_new);

// Por referencia
let my_list_d = [10, 20];
let my_list_e = [30, 40];

function my_list_func_extra(my_list1, my_list2) {
  let temp = my_list1;
  my_list1 = my_list2;
  my_list2 = temp;

  return [my_list1, my_list2];
}

let [my_list_d_new, my_list_e_new] = my_list_func_extra(my_list_d, my_list_e);
console.log(my_list_d, my_list_e, my_list_d_new, my_list_e_new);

/*
 * EJERCICIO:
 * Explora el concepto de clase y crea un ejemplo que implemente un inicializador,
 * atributos y una función que los imprima (teniendo en cuenta las posibilidades
 * de tu lenguaje).
 * Una vez implementada, créala, establece sus parámetros, modifícalos e imprímelos
 * utilizando su función.
 *
 * DIFICULTAD EXTRA (opcional):
 * Implementa dos clases que representen las estructuras de Pila y Cola (estudiadas
 * en el ejercicio número 7 de la ruta de estudio)
 * - Deben poder inicializarse y disponer de operaciones para añadir, eliminar,
 *   retornar el número de elementos e imprimir todo su contenido.
 */

// Ejercicio
class Programmer {
  surname = null;
  constructor(name, age, languages = []) {
    this.name = name;
    this.age = age;
    this.languages = languages;
  }

  print() {
    console.log(
      `Nombre: ${this.name}, Apellidos: ${this.surname}, Edad: ${this.age}, Lenguajes: ${this.languages}`
    );
  }
}

let my_programmer = new Programmer("Aarón", 45, [
  "Javascript",
  "PHP",
  "HTML",
  "CSS",
]);
my_programmer.print();
my_programmer.surname = "Pesqueira Fariña";
my_programmer.print();
my_programmer.name = "AarónDev";
my_programmer.print();

// Dificultad extra
class Stack {
  stack = [];
  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.count() === 0) {
      return null;
    }
    return this.stack.pop();
  }

  count() {
    return this.stack.length;
  }

  print() {
    for (let element of this.stack.slice().reverse()) {
      console.log(element);
    }
  }
}

class Queue {
  queue = [];
  enqueue(element) {
    this.queue.push(element);
  }

  dequeue() {
    if (this.count() === 0) {
      return null;
    }
    return this.queue.shift();
  }

  count() {
    return this.queue.length;
  }

  print() {
    for (let element of this.queue) {
      console.log(element);
    }
  }
}

let my_stack = new Stack();
my_stack.push("1");
my_stack.push("2");
my_stack.push("3");
my_stack.print();
my_stack.pop();
my_stack.print();
console.log(my_stack.count());

let my_queue = new Queue();
my_queue.enqueue("1");
my_queue.enqueue("2");
my_queue.enqueue("3");
my_queue.print();
my_queue.dequeue();
my_queue.print();
console.log(my_queue.count());

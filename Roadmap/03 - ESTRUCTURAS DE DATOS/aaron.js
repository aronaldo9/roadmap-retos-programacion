// #03 ESTRUCTURAS DE DATOS

/*
 * EJERCICIO:
 * - Muestra ejemplos de creación de todas las estructuras soportadas por defecto
 *   en tu lenguaje.
 * - Utiliza operaciones de inserción, borrado, actualización y ordenación.
 */

// Arrays
let my_list = ["a", "b", "c", "d", "e", "f", "g", "h"];
console.log(my_list);

// Inserción de elementos en la lista
my_list.push("i"); // push lo inserta al final
console.log(my_list);

my_list.unshift(0); // unshift lo inserta al principio
console.log(my_list);

my_list.splice(10, 0, "j"); // splice lo inserta en la posición que le indicamos en el primer parámetro y lo sustituimos por el número de parámetros indicados en el segundo parámetro. El tercer parámetro es para indicar el elemento a insertar.
console.log(my_list);
my_list.splice(0, 1, 1);
console.log(my_list);

// Borrado de elementos de la lista
my_list.pop(); // pop elimina el último elemento de la lista
console.log(my_list);

my_list.shift(); // shift elimina el primer elemento de la lista
console.log(my_list);

my_list.splice(1, 2); // shift elimina el número de elementos indicados en el segundo parámetro, a partir de la posición indicada en el primer parámetro
console.log(my_list);

// Actualización de la lista
my_list[7] = "j";

// Ordenación de la lista
let my_list2 = [3, 8, 9, 2, 1, 4, 7, 5, 6]; // sort ordena la lista siguiendo el orden ascendente por defecto. Si son textos ordena alfabéticamente
let my_list3 = ["pepe", "juan", "dani", "aaron"];
console.log(my_list2.sort());
console.log(my_list3.sort());

// Sets

let my_newSet = new Set([1, 2, 3, 4, 5, 6]);
console.log(my_newSet);

my_newSet.add("a"); // add añade un elemento al set
console.log(my_newSet);

my_newSet.delete("a"); // delete borra un elemento al set
console.log(my_newSet);

my_newSet.clear(); // clear borra todos los elementos del set
console.log(my_newSet);

my_newSet = new Set([3, 8, 9, 2, 1, 4, 7, 5, 6]);
// my_newSet.sort(); // No se puede ordenar un set
console.log(my_newSet);

console.log(my_newSet.has(3)); // has comprueba si un elemento está en el set

// Maps
let my_newMap = new Map();
my_newMap.set("nombre", "Aarón"); // set añade un elemento al map
my_newMap.set("edad", 45);
console.log(my_newMap.get("nombre"));

my_newMap.delete("edad"); // delete borra un elemento al map
console.log(my_newMap);

// Stacks (Pilas)
console.log("Stacks");
class Stack {
  constructor() {
    this.items = [];
  }

  // Operación de inserción
  push(element) {
    this.items.push(element);
  }

  // Operación de borrado
  pop() {
    if (this.items.length === 0) return "Underflow";
    return this.items.pop();
  }

  // Operación de consulta del elemento en la cima
  peek() {
    return this.items[this.items.length - 1];
  }

  // Operación de actualización
  update(index, newValue) {
    if (index >= 0 && index < this.items.length) {
      this.items[index] = newValue;
    } else {
      return "Index out of bounds";
    }
  }

  // Operación de ordenación (aunque no es común en pilas)
  sort() {
    this.items.sort((a, b) => a - b);
  }

  // Mostrar todos los elementos
  display() {
    console.log(this.items);
  }
}

let stack = new Stack();
stack.push(5);
stack.push(1);
stack.push(3);
stack.push(4);
stack.display(); // [5, 1, 3, 4]

stack.pop();
stack.display(); // [5, 1, 3]

stack.update(1, 6);
stack.display(); // [5, 6, 3]

stack.sort();
stack.display(); // [3, 5, 6]

// Queues (Colas)
console.log("Queues");
class Queue {
  constructor() {
    this.items = [];
  }

  // Operación de inserción
  enqueue(element) {
    this.items.push(element);
  }

  // Operación de borrado
  dequeue() {
    if (this.items.length === 0) return "Underflow";
    return this.items.shift();
  }

  // Operación de consulta del primer elemento
  front() {
    return this.items[0];
  }

  // Operación de actualización
  update(index, newValue) {
    if (index >= 0 && index < this.items.length) {
      this.items[index] = newValue;
    } else {
      return "Index out of bounds";
    }
  }

  // Operación de ordenación (aunque no es común en colas)
  sort() {
    this.items.sort((a, b) => a - b);
  }

  // Mostrar todos los elementos
  display() {
    console.log(this.items);
  }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(2);
queue.enqueue(8);
queue.enqueue(4);
queue.display(); // [10, 2, 8, 4]

queue.dequeue();
queue.display(); // [2, 8, 4]

queue.update(1, 7);
queue.display(); // [2, 7, 4]

queue.sort();
queue.display(); // [2, 4, 7]

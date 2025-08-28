/*
 * EJERCICIO:
 * Explora el concepto de herencia según tu lenguaje. Crea un ejemplo que
 * implemente una superclase Animal y un par de subclases Perro y Gato,
 * junto con una función que sirva para imprimir el sonido que emite cada Animal.
 *
 * DIFICULTAD EXTRA (opcional):
 * Implementa la jerarquía de una empresa de desarrollo formada por Empleados que
 * pueden ser Gerentes, Gerentes de Proyectos o Programadores.
 * Cada empleado tiene un identificador y un nombre.
 * Dependiendo de su labor, tienen propiedades y funciones exclusivas de su
 * actividad, y almacenan los empleados a su cargo.
 */

// Ejercicio
class Animal {
  constructor(sound) {
    this.sound = sound;
  }

  makeSound() {
    console.log(this.sound);
  }
}

// // Subclases
class Dog extends Animal {
  constructor() {
    super("Guau guau");
  }
}

class Cat extends Animal {
  constructor() {
    super("Miau miau");
  }
}

let dog = new Dog();
let cat = new Cat();

dog.makeSound();
cat.makeSound();

// Polimorfismo
let animals = [dog, cat];
animals.forEach((animal) => animal.makeSound());

// Dificultad extra
class Employee {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  displayEmployees(indent = 0) {
    let indentation = " ".repeat(indent);
    console.log(`${indentation}${this.name} (${this.constructor.name})`);
    this.employees.forEach((employee) => {
      employee.displayEmployees(indent + 4);
    });
  }

  printEmployees() {
    if (this.employees.length === 0) {
      console.log(`${this.name} no tiene empleados a su cargo.`);
    } else {
      console.log(`Empleados a cargo de ${this.name}:`);
      for (let employee of this.employees) {
        console.log(`- ${employee.name} (${employee.constructor.name})`);
      }
    }
  }
}

class Manager extends Employee {
  constructor(id, name) {
    super(id, name);
  }

  coordinateProjects() {
    console.log(`${this.name} coordina todos los proyectos de la empresa`);
  }
}

class ProjectManager extends Manager {
  constructor(id, name) {
    super(id, name);
  }

  manageProject() {
    console.log(`${this.name} está gestionando un proyecto`);
  }
}

class Programmer extends Employee {
  constructor(id, name, language) {
    super(id, name);
    this.language = language;
  }

  code() {
    console.log(`${this.name} está programando en ${this.language}`);
  }

  addEmployee(employee) {
    console.log(
      `El programador no tiene empleados a su cargo. ${employee.name} no se añadirá`
    );
  }
}

// Creando los empleados
let manager = new Manager(1, "Federico");
let projectManager = new ProjectManager(2, "Romualdo");
let projectManager2 = new ProjectManager(3, "Teodosio");
let programmer = new Programmer(4, "Barrabás", "JavaScript");
let programmer2 = new Programmer(5, "Clodoaldo", "JavaScript");
let programmer3 = new Programmer(6, "Farrus", "JavaScript");
let programmer4 = new Programmer(7, "Godofredo", "JavaScript");

// Creando la jerarquía
manager.addEmployee(projectManager);
manager.addEmployee(projectManager2);
projectManager.addEmployee(programmer);
projectManager.addEmployee(programmer2);
projectManager2.addEmployee(programmer3);
projectManager2.addEmployee(programmer4);

// Mostrando la jerarquía completa
manager.displayEmployees();

// Llamando a los métodos individuales
manager.coordinateProjects();
projectManager.manageProject();
programmer.code();
programmer.addEmployee(programmer3); // Mensaje de que no puede agregar empleados

// Mostrando empleados de cada manager
manager.printEmployees();
projectManager.printEmployees();
programmer.printEmployees(); // Sin empleados a cargo

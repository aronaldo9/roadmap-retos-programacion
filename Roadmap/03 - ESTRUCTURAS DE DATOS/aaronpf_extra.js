/*
 * DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización
 *   y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
 *   y a continuación los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no númericos y con más
 *   de 11 dígitos (o el número de dígitos que quieras).
 * - También se debe proponer una operación de finalización del programa.
 */

import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

let agenda = [];

const mainMenu = () => {
  console.log("\nAgenda de Contactos");
  console.log("1. Insertar contacto");
  console.log("2. Buscar contacto");
  console.log("3. Actualizar contacto");
  console.log("4. Eliminar contacto");
  console.log("5. Mostrar todos los contactos");
  console.log("6. Salir");

  rl.question("Selecciona una opción: ", (option) => {
    switch (option) {
      case "1":
        insertarContacto();
        break;
      case "2":
        buscarContacto();
        break;
      case "3":
        actualizarContacto();
        break;
      case "4":
        eliminarContacto();
        break;
      case "5":
        mostrarContactos();
        break;
      case "6":
        finalizarPrograma();
        break;
      default:
        console.log("Opción no válida, intenta de nuevo.");
        mainMenu();
        break;
    }
  });
};

const insertarContacto = () => {
  rl.question("Introduce el nombre del contacto: ", (nombre) => {
    rl.question("Introduce el número de teléfono: ", (telefono) => {
      if (validarTelefono(telefono)) {
        agenda.push({ nombre, telefono });
        console.log("Contacto añadido con éxito.");
      } else {
        console.log(
          "Número de teléfono no válido. Debe ser numérico y tener entre 9 y 11 dígitos."
        );
      }
      mainMenu();
    });
  });
};

const buscarContacto = () => {
  rl.question("Introduce el nombre del contacto a buscar: ", (nombre) => {
    const contacto = agenda.find(
      (c) => c.nombre.toLowerCase() === nombre.toLowerCase()
    );
    if (contacto) {
      console.log(
        `Contacto encontrado: Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}`
      );
    } else {
      console.log("Contacto no encontrado.");
    }
    mainMenu();
  });
};

const actualizarContacto = () => {
  rl.question("Introduce el nombre del contacto a actualizar: ", (nombre) => {
    const index = agenda.findIndex(
      (c) => c.nombre.toLowerCase() === nombre.toLowerCase()
    );
    if (index !== -1) {
      rl.question("Introduce el nuevo número de teléfono: ", (telefono) => {
        if (validarTelefono(telefono)) {
          agenda[index].telefono = telefono;
          console.log("Contacto actualizado con éxito.");
        } else {
          console.log(
            "Número de teléfono no válido. Debe ser numérico y tener entre 9 y 11 dígitos."
          );
        }
        mainMenu();
      });
    } else {
      console.log("Contacto no encontrado.");
      mainMenu();
    }
  });
};

const eliminarContacto = () => {
  rl.question("Introduce el nombre del contacto a eliminar: ", (nombre) => {
    const index = agenda.findIndex(
      (c) => c.nombre.toLowerCase() === nombre.toLowerCase()
    );
    if (index !== -1) {
      agenda.splice(index, 1);
      console.log("Contacto eliminado con éxito.");
    } else {
      console.log("Contacto no encontrado.");
    }
    mainMenu();
  });
};

const mostrarContactos = () => {
  if (agenda.length > 0) {
    console.log("\nLista de contactos:");
    agenda.forEach((contacto, index) => {
      console.log(
        `${index + 1}. Nombre: ${contacto.nombre}, Teléfono: ${
          contacto.telefono
        }`
      );
    });
  } else {
    console.log("No hay contactos en la agenda.");
  }
  mainMenu();
};

const finalizarPrograma = () => {
  console.log("Programa finalizado.");
  rl.close();
};

const validarTelefono = (telefono) => {
  const regex = /^\d{1,11}$/;
  return regex.test(telefono);
};

// Iniciar el programa mostrando el menú principal
mainMenu();

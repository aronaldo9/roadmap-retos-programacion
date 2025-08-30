/*
 * IMPORTANTE: Sólo debes subir el fichero de código como parte del ejercicio.
 *
 * EJERCICIO:
 * Desarrolla un programa capaz de crear un archivo XML y JSON que guarde los
 * siguientes datos (haciendo uso de la sintaxis correcta en cada caso):
 * - Nombre
 * - Edad
 * - Fecha de nacimiento
 * - Listado de lenguajes de programación
 * Muestra el contenido de los archivos.
 * Borra los archivos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Utilizando la lógica de creación de los archivos anteriores, crea un
 * programa capaz de leer y transformar en una misma clase custom de tu
 * lenguaje los datos almacenados en el XML y el JSON.
 * Borra los archivos.
 */

// Creamos la variable con los datos que vamos a guardar
const misDatos = {
  nombre: "Aarón",
  edad: 46,
  fechaNacimiento: "13-07-1979",
  lenguajes: ["JavaScript", "PHP", "Java"],
};

// Creamos un archivo JSON con esos datos
const fs = require("fs");

function crearJson() {
  // Convertimos los datos a formato JSON
  const datosJson = JSON.stringify(misDatos);

  fs.writeFileSync("datos.json", datosJson);
  console.log("Archivo JSON creado con éxito.");
  console.log("Contenido del archivo JSON:");
  const contenidoJson = fs.readFileSync("datos.json", "utf-8");
  console.log(contenidoJson);
}

function crearXml() {
  // Empezamos con un string vacío y vamos construyendo línea por línea
  let datosXml = "";

  // Construimos el archivo xml
  datosXml += '<?xml version="1.0" encoding="UTF-8"?>\n';
  datosXml += "<persona>\n";
  datosXml += `  <nombre>${misDatos.nombre}</nombre>\n`;
  datosXml += `  <edad>${misDatos.edad}</edad>\n`;
  datosXml += `  <fechaNacimiento>${misDatos.fechaNacimiento}</fechaNacimiento>\n`;
  datosXml += "  <lenguajes>\n";
  misDatos.lenguajes.forEach((lenguaje) => {
    datosXml += `    <lenguaje>${lenguaje}</lenguaje>\n`;
  });
  datosXml += "  </lenguajes>\n";
  datosXml += "</persona>";

  // Guardar y mostrar (igual que antes)
  fs.writeFileSync("datos.xml", datosXml);
  console.log("Archivo XML creado con éxito.");
  console.log("Contenido del archivo XML:");
  const contenidoXml = fs.readFileSync("datos.xml", "utf-8");
  console.log(contenidoXml);
}

crearJson();
crearXml();

function borrarArchivos() {
  fs.unlinkSync("datos.json");
  fs.unlinkSync("datos.xml");
  console.log("Archivos borrados con éxito.");
}

// Función principal con manejo de errores
function main() {
  try {
    console.log("=== EJERCICIO JSON Y XML ===\n");

    // Ejecutar todas las operaciones
    crearJson();
    console.log(); // Línea en blanco para separar
    crearXml();
    console.log(); // Línea en blanco para separar
    borrarArchivos();

    console.log("\n✅ Ejercicio completado exitosamente!");
  } catch (error) {
    console.error("❌ Error durante la ejecución:", error.message);
    console.error("💡 Revisa los permisos de archivos y el espacio en disco");
  }
}

// Ejecutar el programa principal
main();

// === DIFICULTAD EXTRA ===
console.log("\n".repeat(2));
console.log("=== DIFICULTAD EXTRA ===");

// PASO 1: Crear la clase Persona
class Persona {
  constructor(nombre, edad, fechaNacimiento, lenguajes) {
    this.nombre = nombre;
    this.edad = edad;
    this.fechaNacimiento = fechaNacimiento;
    this.lenguajes = lenguajes;
  }

  // Método para mostrar información
  toString() {
    return `Persona: ${this.nombre}, ${this.edad} años, nacido el ${
      this.fechaNacimiento
    }, lenguajes: [${this.lenguajes.join(", ")}]`;
  }

  // PASO 2: Método estático para leer desde JSON
  static desdeJSON(archivo) {
    console.log(`📖 Leyendo datos desde ${archivo}...`);

    // Leer archivo JSON
    const contenidoJSON = fs.readFileSync(archivo, "utf-8");

    // Parsear JSON a objeto JavaScript
    const datos = JSON.parse(contenidoJSON);

    // Crear y retornar nueva instancia de Persona
    return new Persona(
      datos.nombre,
      datos.edad,
      datos.fechaNacimiento,
      datos.lenguajes
    );
  }

  // PASO 3: Método estático para leer desde XML
  static desdeXML(archivo) {
    console.log(`📖 Leyendo datos desde ${archivo}...`);

    // Leer archivo XML
    const contenidoXML = fs.readFileSync(archivo, "utf-8");

    // Parsear XML manualmente (parsing simple)
    const nombre = contenidoXML.match(/<nombre>(.*?)<\/nombre>/)[1];
    const edad = parseInt(contenidoXML.match(/<edad>(.*?)<\/edad>/)[1]);
    const fechaNacimiento = contenidoXML.match(
      /<fechaNacimiento>(.*?)<\/fechaNacimiento>/
    )[1];

    // Extraer array de lenguajes
    const lenguajes = [];
    const lenguajeMatches = contenidoXML.matchAll(
      /<lenguaje>(.*?)<\/lenguaje>/g
    );
    for (const match of lenguajeMatches) {
      lenguajes.push(match[1]);
    }

    // Crear y retornar nueva instancia de Persona
    return new Persona(nombre, edad, fechaNacimiento, lenguajes);
  }
}

// PASO 4: Probar la dificultad extra
function dificultadExtra() {
  try {
    console.log("\n🔄 Recreando archivos para la dificultad extra...");

    // Crear archivos nuevamente (porque los borramos antes)
    crearJson();
    crearXml();

    console.log("\n👤 === CREANDO OBJETOS DESDE ARCHIVOS ===");

    // Crear objetos Persona desde cada archivo
    const personaDesdeJSON = Persona.desdeJSON("datos.json");
    const personaDesdeXML = Persona.desdeXML("datos.xml");

    // Mostrar resultados
    console.log("\n📄 Objeto creado desde JSON:");
    console.log(personaDesdeJSON.toString());

    console.log("\n📄 Objeto creado desde XML:");
    console.log(personaDesdeXML.toString());

    // Verificar que son iguales
    console.log("\n🔍 === COMPARACIÓN DE DATOS ===");
    const sonIguales =
      personaDesdeJSON.nombre === personaDesdeXML.nombre &&
      personaDesdeJSON.edad === personaDesdeXML.edad &&
      personaDesdeJSON.fechaNacimiento === personaDesdeXML.fechaNacimiento &&
      JSON.stringify(personaDesdeJSON.lenguajes) ===
        JSON.stringify(personaDesdeXML.lenguajes);

    console.log(
      "¿Los objetos tienen los mismos datos?",
      sonIguales ? "✅ SÍ" : "❌ NO"
    );

    // Borrar archivos al final
    console.log("\n🗑️ Borrando archivos...");
    borrarArchivos();
  } catch (error) {
    console.error("❌ Error en dificultad extra:", error.message);
  }
}

// Ejecutar dificultad extra
dificultadExtra();

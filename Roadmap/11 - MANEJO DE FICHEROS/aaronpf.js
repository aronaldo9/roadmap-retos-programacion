/*
 * IMPORTANTE: Sólo debes subir el fichero de código como parte del ejercicio.
 *
 * EJERCICIO:
 * Desarrolla un programa capaz de crear un archivo que se llame como
 * tu usuario de GitHub y tenga la extensión .txt.
 * Añade varias líneas en ese fichero:
 * - Tu nombre.
 * - Edad.
 * - Lenguaje de programación favorito.
 * Imprime el contenido.
 * Borra el fichero.
 *
 * DIFICULTAD EXTRA (opcional):
 * Desarrolla un programa de gestión de ventas que almacena sus datos en un
 * archivo .txt.
 * - Cada producto se guarda en una línea del archivo de la siguiente manera:
 *   [nombre_producto], [cantidad_vendida], [precio].
 * - Siguiendo ese formato, y mediante terminal, debe permitir añadir, consultar,
 *   actualizar, eliminar productos y salir.
 * - También debe poseer opciones para calcular la venta total y por producto.
 * - La opción salir borra el .txt.
 */

// Ejercicio
const fs = require("fs");

const githubUser = "aronaldo9";
const fileName = `${githubUser}.txt`;

// Datos a escribir en el fichero
const content = {
  name: "Aaron",
  age: 25,
  favoriteLanguage: "JavaScript",
};

try {
  // Crear y escribir en el fichero
  fs.writeFileSync(fileName, JSON.stringify(content, null, 2));
  console.log("Archivo creado correctamente");

  // Leer el contenido del fichero
  const fileContent = fs.readFileSync(fileName, "utf8");
  console.log("Contenido del archivo:\n", fileContent);

  // Borrar el archivo
  fs.unlinkSync(fileName);
  console.log("Archivo borrado correctamente");
} catch (error) {
  console.log("Se ha producido un error", error);
}

// Dificultad extra

const salesFileName = "sales.txt";

const sales = [
  { name: "Product 1", quantity: 10, price: 100 },
  { name: "Product 2", quantity: 20, price: 200 },
  { name: "Product 3", quantity: 30, price: 300 },
];

function addSale(product) {
  fs.appendFileSync(
    salesFileName,
    `${product.name}, ${product.quantity}, ${product.price}\n`
  );
}

function readSales() {
  const fileContent = fs.readFileSync(salesFileName, "utf8");
  console.log("Contenido del archivo:\n", fileContent);
}

function updateSale(product) {
  const fileContent = fs.readFileSync(salesFileName, "utf8");
  const lines = fileContent.split("\n").filter((line) => line !== "");
  const updatedLines = lines.map((line) => {
    const [name, quantity, price] = line.split(", ");
    if (name === product.name) {
      return `${product.name}, ${product.quantity}, ${product.price}`;
    }
    return line;
  });
  fs.writeFileSync(salesFileName, updatedLines.join("\n") + "\n");
}

function deleteSale(productName) {
  const fileContent = fs.readFileSync(salesFileName, "utf8");
  const lines = fileContent.split("\n").filter((line) => line !== "");
  const updatedLines = lines.filter((line) => {
    const [name] = line.split(", ");
    return name !== productName;
  });
  fs.writeFileSync(salesFileName, updatedLines.join("\n") + "\n");
}

function totalSale() {
  const fileContent = fs.readFileSync(salesFileName, "utf8");
  const lines = fileContent.split("\n").filter((line) => line !== "");
  const total = lines.reduce((acc, line) => {
    const [name, quantity, price] = line.split(", ");
    return acc + quantity * price;
  }, 0);
  console.log("Venta total:", total);
}

function saleByProduct(productName) {
  const fileContent = fs.readFileSync(salesFileName, "utf8");
  const lines = fileContent.split("\n").filter((line) => line !== "");
  const product = lines.find((line) => {
    const [name] = line.split(", ");
    return name === productName;
  });
  if (product) {
    const [name, quantity, price] = product.split(", ");
    console.log(`Venta de ${name}: ${quantity * price}`);
  } else {
    console.log("Producto no encontrado");
  }
}

try {
  // Crear y escribir en el fichero
  sales.forEach((sale) => addSale(sale));
  console.log("Ventas añadidas correctamente");

  // Leer el contenido del fichero
  readSales();

  // Actualizar venta
  updateSale({ name: "Product 2", quantity: 25, price: 200 });
  console.log("Venta actualizada correctamente");

  // Eliminar venta
  deleteSale("Product 1");
  console.log("Venta eliminada correctamente");

  // Venta total
  totalSale();

  // Venta por producto
  saleByProduct("Product 3");

  // Borrar el archivo
  fs.unlinkSync(salesFileName);
  console.log("Archivo borrado correctamente");
} catch (error) {
  console.log("Se ha producido un error", error);
}

// Ejemplo de uso

// Importar las funciones y datos a testear
const suma = require("./suma");
const datos = require("./datos");

// TESTS PARA LA FUNCIÓN SUMA (Ejercicio principal)
describe("Función suma", () => {
  test("debe sumar correctamente dos números positivos", () => {
    expect(suma(4, 5)).toBe(9);
  });

  test("debe sumar correctamente números negativos", () => {
    expect(suma(-1, 1)).toBe(0);
  });

  test("debe manejar números decimales", () => {
    expect(suma(2.5, 3.5)).toBe(6);
  });

  test("debe manejar el cero", () => {
    expect(suma(0, 5)).toBe(5);
    expect(suma(10, 0)).toBe(10);
  });
});

// TESTS PARA LOS DATOS (Dificultad Extra)
describe("Datos personales", () => {
  // Test 1: Verificar que existen todos los campos
  test("debe tener todos los campos requeridos", () => {
    expect(datos).toHaveProperty("name");
    expect(datos).toHaveProperty("age");
    expect(datos).toHaveProperty("birth_date");
    expect(datos).toHaveProperty("programming_languages");
  });

  // Test 2: Verificar que los datos son correctos
  test("debe tener datos con los tipos correctos", () => {
    // Verificar tipos
    expect(typeof datos.name).toBe("string");
    expect(typeof datos.age).toBe("number");
    expect(typeof datos.birth_date).toBe("string");
    expect(Array.isArray(datos.programming_languages)).toBe(true);

    // Verificar que no están vacíos
    expect(datos.name.length).toBeGreaterThan(0);
    expect(datos.age).toBeGreaterThan(0);
    expect(datos.birth_date.length).toBeGreaterThan(0);
    expect(datos.programming_languages.length).toBeGreaterThan(0);

    // Verificar formato de fecha (YYYY-MM-DD)
    expect(datos.birth_date).toMatch(/^\d{4}-\d{2}-\d{2}$/);

    // Verificar que todos los lenguajes son strings
    datos.programming_languages.forEach((lenguaje) => {
      expect(typeof lenguaje).toBe("string");
      expect(lenguaje.length).toBeGreaterThan(0);
    });
  });
});

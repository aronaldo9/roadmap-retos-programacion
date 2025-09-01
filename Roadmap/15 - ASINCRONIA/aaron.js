/*
 * EJERCICIO:
 * Utilizando tu lenguaje, crea un programa capaz de ejecutar de manera
 * asíncrona una función que tardará en finalizar un número concreto de
 * segundos parametrizables. También debes poder asignarle un nombre.
 * La función imprime su nombre, cuándo empieza, el tiempo que durará
 * su ejecución y cuando finaliza.
 *
 * DIFICULTAD EXTRA (opcional):
 * Utilizando el concepto de asincronía y la función anterior, crea
 * el siguiente programa que ejecuta en este orden:
 * - Una función C que dura 3 segundos.
 * - Una función B que dura 2 segundos.
 * - Una función A que dura 1 segundo.
 * - Una función D que dura 1 segundo.
 * - Las funciones C, B y A se ejecutan en paralelo.
 * - La función D comienza su ejecución cuando las 3 anteriores han finalizado.
 */

function funcionAsincrona(nombre, duracionSegundos) {
  console.log(`Iniciando ${nombre}...`);
  const inicio = Date.now();
  return new Promise((resolve) => {
    setTimeout(() => {
      const fin = Date.now();
      console.log(`Finalizando ${nombre}...`);
      console.log(`Duración de ${nombre}: ${(fin - inicio) / 1000} segundos`);
      resolve();
    }, duracionSegundos * 1000);
  });
}

// === PRUEBA DE LA FUNCIÓN ===
funcionAsincrona("MiTarea", 2);

// === DIFICULTAD EXTRA ===
console.log("\n=== DIFICULTAD EXTRA ===");

async function dificultadExtra() {
  console.log("🚀 Iniciando dificultad extra...\n");

  // PASO 1: Ejecutar C, B y A EN PARALELO
  console.log("📋 Ejecutando C, B y A en paralelo...");

  const inicioParalelo = Date.now();

  // Promise.all ejecuta todas las funciones al mismo tiempo
  await Promise.all([
    funcionAsincrona("Función C", 3), // 3 segundos
    funcionAsincrona("Función B", 2), // 2 segundos
    funcionAsincrona("Función A", 1), // 1 segundo
  ]);

  const finParalelo = Date.now();
  console.log(
    `\n⏱️ Las 3 funciones terminaron en ${
      (finParalelo - inicioParalelo) / 1000
    } segundos`
  );

  // PASO 2: Ahora ejecutar D (después de que terminen todas)
  console.log("\n📋 Ahora ejecutando función D...");
  await funcionAsincrona("Función D", 1); // 1 segundo

  console.log("\n✅ ¡Dificultad extra completada!");
}

// Ejecutar dificultad extra
dificultadExtra();

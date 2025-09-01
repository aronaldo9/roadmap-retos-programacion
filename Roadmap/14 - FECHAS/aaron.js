/*
 * EJERCICIO:
 * Crea dos variables utilizando los objetos fecha (date, o semejante) de tu lenguaje:
 * - Una primera que represente la fecha (día, mes, año, hora, minuto, segundo) actual.
 * - Una segunda que represente tu fecha de nacimiento (te puedes inventar la hora).
 * Calcula cuántos años han transcurrido entre ambas fechas.
 *
 * DIFICULTAD EXTRA (opcional):
 * Utilizando la fecha de tu cumpleaños, formatéala y muestra su resultado de
 * 10 maneras diferentes. Por ejemplo:
 * - Día, mes y año.
 * - Hora, minuto y segundo.
 * - Día de año.
 * - Día de la semana.
 * - Nombre del mes.
 * (lo que se te ocurra...)
 */

const fechaActual = new Date();
const fechaNacimiento = new Date(1979, 6, 13, 10, 30, 0); // 13 de JULIO de 1979 a las 10:30:00

console.log("=== FECHAS ===");
console.log("Fecha actual:", fechaActual);
console.log("Fecha nacimiento:", fechaNacimiento);

// MÉTODO 1: Cálculo aproximado (tu método original)
const diferencia = fechaActual - fechaNacimiento;
const añosTranscurridosAprox = Math.floor(
  diferencia / (1000 * 60 * 60 * 24 * 365)
);

console.log("\n=== CÁLCULO DE AÑOS ===");
console.log(`Método aproximado: ${añosTranscurridosAprox} años`);

// MÉTODO 2: Cálculo más preciso (considerando años bisiestos y fechas exactas)
function calcularEdadPrecisa(fechaNac, fechaActual) {
  let años = fechaActual.getFullYear() - fechaNac.getFullYear();

  // Si aún no ha llegado el cumpleaños este año, restar 1
  const cumpleañosEsteAño = new Date(
    fechaActual.getFullYear(),
    fechaNac.getMonth(),
    fechaNac.getDate()
  );
  if (fechaActual < cumpleañosEsteAño) {
    años--;
  }

  return años;
}

const añosPrecisos = calcularEdadPrecisa(fechaNacimiento, fechaActual);
console.log(`Método preciso: ${añosPrecisos} años`);

// === DIFICULTAD EXTRA: 10 FORMATOS DIFERENTES ===
console.log("\n=== DIFICULTAD EXTRA: 10 FORMATOS DE FECHA ===");
console.log("Fecha a formatear:", fechaNacimiento);
console.log("-".repeat(50));

// 1. Día, mes y año (DD/MM/YYYY)
const formato1 = `${fechaNacimiento.getDate().toString().padStart(2, "0")}/${(
  fechaNacimiento.getMonth() + 1
)
  .toString()
  .padStart(2, "0")}/${fechaNacimiento.getFullYear()}`;
console.log("1. DD/MM/YYYY:", formato1);

// 2. Hora, minuto y segundo (HH:MM:SS)
const formato2 = `${fechaNacimiento
  .getHours()
  .toString()
  .padStart(2, "0")}:${fechaNacimiento
  .getMinutes()
  .toString()
  .padStart(2, "0")}:${fechaNacimiento
  .getSeconds()
  .toString()
  .padStart(2, "0")}`;
console.log("2. HH:MM:SS:", formato2);

// 3. Día del año (1-365/366)
const inicioAño = new Date(fechaNacimiento.getFullYear(), 0, 1);
const diaDelAño =
  Math.floor((fechaNacimiento - inicioAño) / (1000 * 60 * 60 * 24)) + 1;
console.log("3. Día del año:", diaDelAño);

// 4. Día de la semana
const diasSemana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];
const diaSemana = diasSemana[fechaNacimiento.getDay()];
console.log("4. Día de la semana:", diaSemana);

// 5. Nombre del mes
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const nombreMes = meses[fechaNacimiento.getMonth()];
console.log("5. Nombre del mes:", nombreMes);

// 6. Formato largo en español
const formato6 = `${diaSemana}, ${fechaNacimiento.getDate()} de ${nombreMes} de ${fechaNacimiento.getFullYear()}`;
console.log("6. Formato largo:", formato6);

// 7. Formato ISO (YYYY-MM-DD)
const formato7 = fechaNacimiento.toISOString().split("T")[0];
console.log("7. Formato ISO:", formato7);

// 8. Timestamp (milisegundos desde 1970)
const timestamp = fechaNacimiento.getTime();
console.log("8. Timestamp:", timestamp);

// 9. Formato 12 horas (AM/PM)
let horas12 = fechaNacimiento.getHours();
const ampm = horas12 >= 12 ? "PM" : "AM";
horas12 = horas12 % 12;
horas12 = horas12 ? horas12 : 12; // 0 se convierte en 12
const formato9 = `${horas12}:${fechaNacimiento
  .getMinutes()
  .toString()
  .padStart(2, "0")} ${ampm}`;
console.log("9. Formato 12h:", formato9);

// 10. Semana del año
function obtenerSemanaDelAño(fecha) {
  const inicioAño = new Date(fecha.getFullYear(), 0, 1);
  const dias = Math.floor((fecha - inicioAño) / (24 * 60 * 60 * 1000));
  return Math.ceil((dias + inicioAño.getDay() + 1) / 7);
}
const semanaDelAño = obtenerSemanaDelAño(fechaNacimiento);
console.log("10. Semana del año:", semanaDelAño);

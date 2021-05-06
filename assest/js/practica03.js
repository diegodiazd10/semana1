/**
 * Ejercicio 9 - Día de la semana
 */

let dia = prompt("Ingresa día de la semana");
if (dia == null) {
  console.log("Por favor ingresar un dia de la semana");
} else {
  dia = dia.toLowerCase();
  if (
    dia == "lunes" ||
    dia == "martes" ||
    dia == "miercoles" ||
    dia == "jueves" ||
    dia == "vierens"
  ) {
    console.log("Dia entre semana");
  } else if (dia == "sabado" || dia == "domingo") {
    console.log("Dia Fin de semana");
  } else {
    console.log("Por favor ingresar un dia de la semana");
  }
}

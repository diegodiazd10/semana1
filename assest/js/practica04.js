/**
 *  Funciones


function prueba1() {
    console.log("Pueba1");
}

const prueba2 = () => {
    console.log("Prueba2");
}

prueba1();
prueba2();

// Suma de dos numeros
 */

const sumaDosNumeros = () => {
  let num1 = prompt("Ingresa nUmero 1");
  let num2 = prompt("Ingresa nUmero 2");
  console.log(num1, num2);
  let resultado = parseInt(num1) + parseInt(num2);
  console.log(resultado)
};
// Resta
const restaDosNumeros = () => {
    let num1 = prompt("Ingresa nUmero 1");
    let num2 = prompt("Ingresa nUmero 2");
    console.log(num1, num2);
    let resultado = parseInt(num1) - parseInt(num2);
    console.log(resultado)
  };
  // Multiplicacion
  const multDosNumeros = () => {
    let num1 = prompt("Ingresa nUmero 1");
    let num2 = prompt("Ingresa nUmero 2");
    console.log(num1, num2);
    let resultado = parseInt(num1) * parseInt(num2);
    console.log(resultado)
  };
  // Division
  const divDosNumeros = () => {
    let num1 = prompt("Ingresa nUmero 1");
    let num2 = prompt("Ingresa nUmero 2");
    console.log(num1, num2);
    if (num2 == 0) {
        console.log("No se puede dividir entre Cero")
    } else {
        let resultado = parseInt(num1) / parseInt(num2);
    console.log(resultado)
    }
    
    let resultado = num2 == 0 ? console.log("No se puede dividir entre Cero") : console.log(parseInt(num1) / parseInt(num2))
  };
// MiniCalculadora

const MiniCalculadora = () => {
  // creamos opcion de menu
  let op = prompt(
    "Ingrese letra de operacion: \nA - Suma \nB - Resta \nC - Multiplicacion \nD - Division"
  );
  if (op == null) {
    alert("Debe ingresar algun dato");
  } else {
    console.log(op);
    if (op != "a" && op != "b" && op != "c" && op != "d" ) {
      alert("Debe ser una opcion Valida entre A y D");
    } else {
      let num1 = parseFloat(prompt("Ingresa el primer numero"));
      let num2 = parseFloat(prompt("Ingresa el primer numero"));
      let resultado = 0;
      if (op == "a") resultado = num1 + num2;
      if (op == "b") resultado = num1 - num2;
      if (op == "c") resultado = num1 * num2;
      if (op == "d") {
        if (num2==0) {
            return alert("No se puede dividir por cero")
        } else {
            resultado = num1/num2;
        }
      }
    }
    console.log("El resultado es: " + resultado);
  }
};

// Variables h3

let mensaje = document.getElementById("mensaje");
let casilla = document.getElementById("casilla");
let historial = document.getElementById("historial")
// Variables Botones
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");
let clear = document.getElementById("clear");
let btnCE = document.getElementById("btnCE");
let punto = document.getElementById("punto");
// Operaciones
let btnSuma = document.getElementById("btnSuma");
let btnResta = document.getElementById("btnResta");
let btnMult = document.getElementById("btnMult");
let btnDiv = document.getElementById("btnDiv");
let btnIgual = document.getElementById("btnIgual");

// Variables temp
let num1Temp = "";
let num2Temp = "";
let op = "";
let history = "";
//Funciones
const btn1f = () => {
  
  if (op === "") {
    num1Temp += "1";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
        
            num2Temp += "1";
            casilla.innerHTML = num2Temp;
            
          
    }else{
        casilla.innerHTML = "";
        
    }
  }
};
const btn2f = () => {
  
  if (op === "") {
    num1Temp += "2";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
        num2Temp += "2";
        casilla.innerHTML = num2Temp;
      }
  }
};

const btn3f = () => {
  
  if (op === "") {
    num1Temp += "3";
    casilla.innerHTML = num1Temp;
  } else {
    num2Temp += "3";
    casilla.innerHTML = num2Temp;
  }
};
const btn4f = () => {
  
  if (op === "") {
    num1Temp += "4";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
      num2Temp += "4";
      casilla.innerHTML = num2Temp;
    }
  }
};

const btn5f = () => {
  
  if (op === "") {
    num1Temp += "5";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
        num2Temp += "5";
        casilla.innerHTML = num2Temp;
      }
  }
};

const btn6f = () => {
  limpiarMensaje();
  if (op === "") {
    num1Temp += "6";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
        num2Temp += "6";
        casilla.innerHTML = num2Temp;
      }
  }
};

const btn7f = () => {
  limpiarMensaje();
  if (op === "") {
    num1Temp += "7";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
        num2Temp += "7";
        casilla.innerHTML = num2Temp;
      }
  }
};

const btn8f = () => {
  limpiarMensaje();
  if (op === "") {
    num1Temp += "8";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
        num2Temp += "8";
        casilla.innerHTML = num2Temp;
      }
  }
};

const btn9f = () => {
  limpiarMensaje();
  if (op === "") {
    num1Temp += "9";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
        num2Temp += "9";
        casilla.innerHTML = num2Temp;
      }
  }
};

const btn0f = () => {
  limpiarMensaje();
  if (op === "") {
    num1Temp += "0";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
        num2Temp += "0";
        casilla.innerHTML = num2Temp;
      }
  }
};
const btnSumaf = () => {
  limpiarMensaje();
  if (num1Temp == "") {
    mensaje.innerHTML = "Digite Un Numero";
  } else {
    op = "+";
  }
};

const btnRestaf = () => {
  if (num1Temp == "") {
    mensaje.innerHTML = "Digite Un Numero";
  } else {
    op = "-";
  }
};

const btnMultf = () => {
  if (num1Temp == "") {
    mensaje.innerHTML = "Digite Un Numero";
  } else {
    op = "*";
  }
};

const btnDivf = () => {
  if (num1Temp == "") {
    mensaje.innerHTML = "Digite Un Numero";
  } else {
    op = "/";
  }
};

const btnIgualf = () => {
  if (num2Temp === "") {
  } else {
    let numero1 = parseFloat(num1Temp);
    let numero2 = parseFloat(num2Temp);
    let resultado = 0;
    switch (op) {
      case "+":
        resultado = numero1 + numero2;
        break;
      case "-":
        resultado = numero1 - numero2;
        break;
      case "*":
        resultado = numero1 * numero2;
        break;
      case "/":
        if (numero2 === 0) {
          mensaje.innerHTML = "No se puede dividir por cero";
        } else {
          resultado = numero1 / numero2;
        }
        break;

      default:
        break;
    }

    casilla.innerHTML = resultado;
    historial.innerHTML = resultado;
  }
};

const limpiarMensaje = () => {
  setTimeout(() => {
    mensaje.innerHTML = "";
  }, 2000);
};

const clearf = () => {
    casilla.innerHTML = "";
    num1Temp = "";
    num2Temp = "";
    op = "";
}
const puntof = () => {
    if (num1Temp.includes(".") && op === "") {
        mensaje.innerHTML = "Ya existe un punto";
        limpiarMensaje();
    } else {
        if (op === "" && num1Temp == "") {
            num1Temp += "0."
            casilla.innerHTML = num1Temp;
            
        } else {
            if (op === "") {
                num1Temp += "."
                casilla.innerHTML = num1Temp;
            } else {
                
            }
        }
    }
}
// Onclick
btn1.onclick = () => {
  btn1f();
};

btn2.onclick = () => {
  btn2f();
};

btn3.onclick = () => {
  btn3f();
};

btn4.onclick = () => {
  btn4f();
};

btn5.onclick = () => {
  btn5f();
};

btn6.onclick = () => {
  btn6f();
};

btn7.onclick = () => {
  btn7f();
};

btn8.onclick = () => {
  btn8f();
};

btn9.onclick = () => {
  btn9f();
};

btn0.onclick = () => {
  btn0f();
};
btnSuma.onclick = () => {
  btnSumaf();
};

btnResta.onclick = () => {
  btnRestaf();
};

btnMult.onclick = () => {
  btnMultf();
};

btnDiv.onclick = () => {
  btnDivf();
};

btnIgual.onclick = () => {
  btnIgualf();
};

clear.onclick = () => {
    clearf();
};

btnCE.onclick = () => {
    btnCEf();
  };

punto.onclick = () => {
    puntof();
};

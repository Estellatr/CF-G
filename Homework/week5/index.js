let value = 0;
let output = document.getElementById("output");
let operator = "";
let operand = "";
output.value = value + operator + operand;
let first = true;
console.log("asd");

document.getElementById("+button").addEventListener("click", (event) => {
  first = false;
  operator = "+";
  output.value = value + operator + operand;
});

document.getElementById("-button").addEventListener("click", (event) => {
  first = false;
  operator = "-";
  output.value = value + operator + operand;
});
document.getElementById("xbutton").addEventListener("click", (event) => {
  first = false;
  operator = "x";
  output.value = value + operator + operand;
});
document.getElementById("÷button").addEventListener("click", (event) => {
  first = false;
  operator = "÷";
  output.value = value + operator + operand;
});
document.getElementById("^button").addEventListener("click", (event) => {
  first = false;
  operator = "^";
  output.value = value + operator + operand;
});

document.getElementById("sqrtbutton").addEventListener("click", (event) => {
    first = false;
    operator = "sqrt";
    output.value = value + operator + operand;
  });

document.getElementById("=button").addEventListener("click", (event) => {
  if (operator == "+") {
    value += parseFloat(operand);
  } else if (operator == "-") {
    value -= parseFloat(operand);
  } else if (operator == "x") {
    value *= parseFloat(operand);
  } else if (operator == "÷") {
    value /= parseFloat(operand);
  } else if (operator == "^") {
    value = value ** parseFloat(operand);
  } else if (operator == "sqrt") {
    value = math.sqrt(value);
  }


  operand = "";
  operator = "";
  output.value = value + operator + operand;
});

document.getElementById("0button").addEventListener("click", (event) => {
  Operand("0");
});

document.getElementById("1button").addEventListener("click", (event) => {
  Operand("1");
});

document.getElementById("2button").addEventListener("click", (event) => {
  Operand("2");
});

document.getElementById("3button").addEventListener("click", (event) => {
  Operand("3");
});

document.getElementById("4button").addEventListener("click", (event) => {
  Operand("4");
});

document.getElementById("5button").addEventListener("click", (event) => {
  Operand("5");
});

document.getElementById("6button").addEventListener("click", (event) => {
  Operand("6");
});

document.getElementById("7button").addEventListener("click", (event) => {
  Operand("7");
});

document.getElementById("8button").addEventListener("click", (event) => {
  Operand("8");
});

document.getElementById("9button").addEventListener("click", (event) => {
  Operand("9");
});

function Operand(operandLocal) {
  console.log("Test");
  if (first) {
    value = parseFloat(value.toString() + operandLocal);
  } else {
    operand += operandLocal;
  }
  console.log(value);
  output.value = value + operator + operand;
}

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    return "Error: División por cero";
  }
  return a / b;
}
function calculadora(num1, num2, operacion) {
  switch (operacion) {
    case "suma":
      return suma(num1, num2);
    case "resta":
      return resta(num1, num2);
    case "multiplicacion":
      return multiplicacion(num1, num2);
    case "division":
      return division(num1, num2);
    default:
      return "Operacion no valida";
  }
}
function IniciarCalculadora(){
    const num1 = parseFloat(prompt('Ingresa el primer numero: '));
    const num2 = parseFloat(prompt('Ingresa el segundo numero: '));
    const operacion = prompt('Ingresa la operacion(suma, resta, multiplicacion o division): ');

    const resultado = calculadora(num1, num2, operacion);
    alert('El resultado es: '+ resultado);
}
IniciarCalculadora();
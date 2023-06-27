function validarNumero(event) {
    const key = event.key;
    const isNumber = /^\d$/.test(key);
    const allowedSpecialKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Home", "End", "Tab", "Enter", ".", ","];
    if (!isNumber && !allowedSpecialKeys.includes(key)) {
      event.preventDefault();
      return false;
    }
  }

function sumar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 + num2;
    document.getElementById("resultado").textContent = resultado.toFixed(2);
}

function restar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 - num2;
    document.getElementById("resultado").textContent = resultado.toFixed(2);
}

function multiplicar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 * num2;
    document.getElementById("resultado").textContent = resultado.toFixed(2);
}

function dividir() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 / num2;
    document.getElementById("resultado").textContent = resultado.toFixed(2);
}
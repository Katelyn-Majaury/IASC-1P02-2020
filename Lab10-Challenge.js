function add(){

  var number1 = parseInt(document.getElementById("number1").value);
  var number2 = parseInt(document.getElementById("number2").value);

  document.getElementById("output").innerHTML = number1 + number2;
}

function subtract(){

  var number1 = parseInt(document.getElementById("number1").value);
  var number2 = parseInt(document.getElementById("number2").value);

  document.getElementById("output").innerHTML = number1 - number2;
}

function multiply(){

  var number1 = parseInt(document.getElementById("number1").value);
  var number2 = parseInt(document.getElementById("number2").value);

  document.getElementById("output").innerHTML = number1 * number2;
}

function divide(){

  var number1 = parseInt(document.getElementById("number1").value);
  var number2 = parseInt(document.getElementById("number2").value);

  document.getElementById("output").innerHTML = number1 / number2;
}

var age = prompt("How old are you?");
var todaysDate = new Date();

var yearofbirth = todaysDate.getFullYear() - age;

document.getElementById("Outputyear").innerHTML = yearofbirth;

console.log("hi");

var mass;
mass = parseInt(document.getElementById("mass1").value);
console.log(mass);
var height = parseInt(document.getElementById("height1").value);
console.log(height);

function bmi() {
  var sum = mass / Math.pow(height, 2);
  console.log(sum);
}

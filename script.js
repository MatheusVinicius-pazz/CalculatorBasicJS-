function insert(num) {
  var number = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = number + num;
}

function clear() {
  this.document.getElementById("result").innerHTML = "";
}

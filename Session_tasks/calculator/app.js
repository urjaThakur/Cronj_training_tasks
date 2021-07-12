function set(val) {
  document.getElementById("input1").value += val;
}

function clr() {
  document.getElementById("input1").value = "";
}
function solve() {
  let x = document.getElementById("input1").value;
  let y = eval(x);
  document.getElementById("input1").value = y;
}

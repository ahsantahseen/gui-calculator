function getNum(number) {
  val_place = document.getElementById("result_box").value += number;
}
function op(sign) {
  document.getElementById("result_box").value += sign;
}
function calc() {
  result = document.getElementById("result_box").value;
  document.getElementById("result_box").value = eval(result);
}
function reset() {
  document.getElementById("result_box").value = "";
}

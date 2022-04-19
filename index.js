var a;

while (true) {
  a = prompt("Че ты хочешь?(+, -, *, /)", "");
  if (a == "+") {
    break;
  } else if (a == "-") {
    break;
  } else if (a == "*") {
    break;
  } else if (a == "/") {
    break;
  }
  alert("Используй только(+, -, *, /)");
}

var b;

while (true) {
  b = prompt("Сколько оперантов юзанешь?", "");
  if (b > 1) {
    break;
  }
  alert("Как бы больше одного надо(");
}
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
  b = +prompt("Сколько оперантов юзанешь?", "");
  if (b > 1) {
    break;
  }
  alert("Как бы больше одного надо(");
}

var arr = [];
var sum = 0;

for (var i = 0; i < b; i++) {
  while (true) {
    arr[i] = +prompt(" число сюда пишем", "");
    if (arr[i] < 500 && arr[i] > -500) {
      break;
    }
    alert("Только числа меньше пяти сотен");
  }

}

if (a == "+" && a == "-") {
  sum = 0;
} else if (a == "/") {
  sum = Math.pow(arr[0], 2);
} else if (a == "*") {
  sum = 1;
}

for (var r = 0; r < b; r++) {
  if (a == "+") {
    sum = arr[r] + sum;
  } else if (a == "-") {
    sum = arr[r] - sum;
  }
}

for (var j = 0; j < b; j++) {
  if (a == "*") {
    sum = arr[j] * sum;
  } else if (a == "/") {
    sum = sum / arr[j];
  }
}

var decision = "";

b = b - 1;

for (let f = 0; f < b; f++) {
  if (a == "+") {
    arr[f] = arr[f] + " + ";
  } else if (a == "-") {
    arr[f] = arr[f] + " - ";
  } else if (a == "*") {
    arr[f] = arr[f] + " * ";
  } else {
    arr[f] = arr[f] + " / ";
  }
}

for (let s = 0; s < b; s++) {
  decision = decision + arr[s];
}

decision = decision + arr[b];

alert(decision + " = " + sum);
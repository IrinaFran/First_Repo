function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result = result * x;
  }
  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");
if (n >= 1 && n % 1 === 0) {
  alert(pow(x, n));
} else {
  alert("Введите натуральное число");
}

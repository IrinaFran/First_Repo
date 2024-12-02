let userName = prompt("Кто ты?", "");
if (userName === "Админ") {
  let userPass = prompt("Пароль?", "");
  if (userPass === "Я главный") {
    alert("Здравствуйте!");
  } else if (userPass === "" || userPass === null) {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }
} else if (userName === "" || userName === null) {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}

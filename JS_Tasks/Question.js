//let result = a + b < 4 ? "Мало" : "Много";

let login = prompt("Какой у вас логин?", "");
let message =
  login == "Сотрудник"
    ? "Привет"
    : login == "Директор"
    ? "Здравствуйте"
    : login == ""
    ? "Нет логина"
    : "";
alert(message);

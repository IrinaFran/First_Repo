function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
//если в объекте есть свойства, то проверка на пустоту выдаст false

binarySearch([1, 2, 3, 4, 5], 4);

// Функция бинарного поиска
function binarySearch(mas, item) { 
  // Крайний левый элемент
  let low = 0;
  // Крайний правый элемент
  let high = mas.length;

  // Пока кр.л.эл меньше или не равен кр.п.эл
  while (low <= high) {
    // Середина вычитаемой части
    let middle = Math.floor((high + low) / 2);
    // Текущее выбранное число
    let guess = mas[middle];
    // Если выбранное число равно искомому
    if (guess == item) {
      // Вывести в консоль индекс искомого числа и остановить
      console.log(middle);
      break;
    }
    // Если выбранное число больше искомого
    if (guess > item) {
      // Изменить кр.п.эл на середину - 1
      high = middle - 1;
      // Иначе
    } else {
      // Изменить кр.л.эл на середину + 1
      low = middle + 1;
    }
  }
}

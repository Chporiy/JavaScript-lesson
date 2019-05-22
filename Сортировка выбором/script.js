// Функция нахождения наименьшего элемента в массиве
function smallest(array) {
  // Храним наименьшее значение. По умолчанию первый элемент в массиве
  let smallest = array[0];
  // Храним наименьшего индекса значения. По умолчанию первый элемент в массиве
  let smallestIndex = 0;
  // Проход по всему массиву в поисках наименьшего элемента
  array.forEach((element, index) => {
    if (element < smallest) {
      smallest = element;
      smallestIndex = index;
    }
  });
  return smallestIndex;
}

// Функция сортировки выбором
function selectionSort(arr) {
  // Создаём новый массив
  let newArr = [];
  // Запоминаем длину входного массива
  const arrLength = arr.length;
  // Проход по всему входному массиву
  for (let index = 0; index < arrLength; index++) {
    // В переменную small записываем значение функции smallest
    let small = smallest(arr);
    // В новый массив добавляем самый маленький элемент входного массива
    newArr.push(arr[small]);
    // Удаляем добавленный элемент из входного массива
    arr.splice(small, 1);    
  }
  return newArr;
}
console.log(selectionSort([5, 3, 9, 4, 7, 11]));

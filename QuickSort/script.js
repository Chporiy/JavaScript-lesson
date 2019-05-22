function quicksort(arr) {
  let pivot = 0,
      less = [],
      greater = [];
  if (arr.length <= 1) {
    return arr; // Базовый случай массивы с 0 и 1 элементом уже отсортированны
  }
  else {
    pivot = Math.floor(arr.length / 2); // Рекурсивный случай
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= arr[pivot])
        less.push(arr[i]);
      else
        greater.push(arr[i]);
    }
    return quicksort(less).concat(quicksort(greater));
  }
}

console.log(quicksort([10, 5, 2, 3]));
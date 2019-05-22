function recSum(arr) {
  if (arr.length == 0) {
    return 0; // Базовый случай
  }
  else {
    return arr.shift() + recSum(arr); // Рукурсивный случай
  }
}

console.log(recSum([2, 4, 6]));
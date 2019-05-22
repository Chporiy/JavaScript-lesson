function fact(x) {
  if (x == 1)
    return 1; // Базовый случай
  else
    return x * fact(x - 1); // Рекурсивный случай
}

console.log(fact(3));
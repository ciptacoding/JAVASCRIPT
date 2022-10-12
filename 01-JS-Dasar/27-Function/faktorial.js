function faktorial(n) {
  let hasil = 1;
  for (let i = n; i > 0; i--) {
    hasil *= i;
  }
  return hasil;
}

console.log(faktorial(5));

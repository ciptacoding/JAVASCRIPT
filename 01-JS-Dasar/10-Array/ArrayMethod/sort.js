//sort adalah pengurutan
let angka = [4, 2, 7, 6, 9, 8, 1, 3, 5];
angka.sort();
console.log(angka.join(" "));

//sort dengan angka puluhan
let angka2 = [20, 41, 23, 2, 5, 7, 67, 80, 1, 3, 9, 70, 52, 8, 4];
angka2.sort(function (a, b) {
  return a - b;
});
console.log(angka2.join(" "));

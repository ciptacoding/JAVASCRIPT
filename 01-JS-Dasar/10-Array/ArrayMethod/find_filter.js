//find = hanya bisa mencari 1 nilai
let angka = [1, 3, 5, 7, 9, 2, 4, 6, 8];
let angka2 = angka.find(function (x) {
  return x == 5;
});
console.log(angka2);

//filter = bisa mencari lebih dari 1 nilai
let myArr = [10, 2, 4, 5, 6, 7, 8, 9, 3, 1, 30, 34, 56];
let myArr2 = myArr.filter(function (y) {
  return y < 6;
});
myArr2.sort();
console.log(myArr2.join(" "));

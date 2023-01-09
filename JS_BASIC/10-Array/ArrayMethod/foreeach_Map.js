//1. foreEach = perulangan for dengan function
let integer = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// versi for normal
// for (let i = 0; i < integer.length; i++) {
//   console.log(integer[i]);
// }

// versi forEach
integer.forEach(function (e) {
  //e=element
  console.log(e);
});

//forEach dengan index
let mhs = ["Cipta", "Molog", "Lolot", "Brokodin"];
mhs.forEach(function (e, i) {
  console.log(`Mahasiswa Ke - ${i + 1} Dengan Nama ${e}`);
});

//map = bisa mengembalikan nilai array
let angka = [2, 5, 7, 9, 4, 6, 3, 8];
let angka2 = angka.map(function (e) {
  return e * 2;
});
console.log(angka2.join(" - "));

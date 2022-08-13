/*
  1. variabel.push() /menambah data dari paling belakang
  2. variabel.pop() /menghapus data dari paling belakang
  3. variabel.join() /untuk menggabungkan array ke dalam string
  4. variabel.unshift() /menambah data paling depan
  5. variabel.shift() /menghapus data paling depan
  6. variabel.splice(index awal, mauDihapusBerapa, elemenBaru, ....)
  7. variabelBaru.slice (indexAwal, indexAkhir)
  8. variabel.length
  9. variabel[index]
  10. variabel[index] = value
  11. delete variabel[index]
*/

let myArr = [];

myArr.push("Cipta", "Dwipa", "Jaya", 200030282);

myArr.pop();

myArr.unshift("Babi", "I", "Gusti", 23);

myArr.shift();

myArr.splice(2, 1, "Ngurah");

let myArr2 = myArr.slice(3, 6);

console.log(myArr.join(" - "));
console.log(myArr2.join(" "));
console.log(myArr.length);

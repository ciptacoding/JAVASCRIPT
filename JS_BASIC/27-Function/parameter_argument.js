function tambah(a, b) {
  return a + b;
}
function kali(a, b) {
  return a * b;
}

let hasil = kali(tambah(2, 5), tambah(5, 3));
console.log(hasil);

// dengan inputan user
let c = parseInt(prompt("Masukan Nilai : "));
let d = parseInt(prompt("Masukan Nilai : "));
let total = tambah(c * 2, d * 4);
alert(total);

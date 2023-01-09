let input = prompt("Masukan Angka : ");

if (input % 2 == 0) {
  alert(`${input} Adalah Bilangan Genap`);
} else if (input % 2 == 1) {
  alert(`${input} Adalah Bilangan Ganjil`);
} else {
  alert("Tolong Masukan Angka Saja !");
}

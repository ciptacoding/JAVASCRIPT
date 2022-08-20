let tanya = true;
while (tanya) {
  let player = prompt("Pilih: gajah, orang, semut");
  let comp = Math.random();

  // mengatur pilihan comp
  if (comp <= 0.34) {
    comp = "gajah";
  } else if (comp <= 0.66) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  // menentukan rules
  let hasil = "";
  if (player === comp) {
    hasil = "Seri";
  } else if (player === "gajah") {
    // tanpa ternary
    if (comp === "orang") {
      hasil = "Menang";
    } else {
      hasil = "Kalah";
    }
  } else if (player === "orang") {
    hasil = comp === "gajah" ? "Kalah" : "Menang"; //ternary operator
  } else if (player === "semut") {
    hasil = comp === "orang" ? "Kalah" : "Menang"; //ternary operator
  } else {
    hasil = "Operator yang anda masukkan salah";
  }

  // menentukan hasil
  alert(`Kamu memilih ${player} dan Komputer memilih ${comp} \nMaka hasilnya kamu ${hasil}`);

  tanya = confirm("Lagi ?");
}

alert("Terima kasih Sudah Bermain");

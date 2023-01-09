let lanjut = true;
while (lanjut) {
  //menentukan pilihan player
  let player = prompt("Pilih : gunting, batu, kertas");

  //menangkap pilihan komputer
  //membangkitkan bilangan random
  let comp = Math.random;

  if (comp < 0.34) {
    comp = "gunting";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "batu";
  } else {
    comp = "kertas";
  }

  //menentukan rules
  hasil = "";
  if (player == comp) {
    hasil = "Hasilnya seri";
  } else if (player == "gunting") {
    // if (comp == "Batu") {
    //   hasil = "Kalah";
    // } else {
    //   hasil = "Menang";
    // }
    //Dengan Tenary
    hasil = comp == "batu" ? "Kalah" : "Menang";
  } else if (player == "batu") {
    hasil = comp == "gunting" ? "Menang" : "Kalah";
  } else if (player == "kertas") {
    hasil = comp == "batu" ? "Menang" : "Kalah";
  } else {
    hasil = "Mohon Masukan Keyword Sesuai Intruksi Diatas";
  }
  //menampilkan hasil
  alert(`Anda Memilih ${player} Dan Komputer Memilih ${comp} \nHasilnya Anda = ${hasil}`);

  lanjut = confirm("Lagi?");
}
alert("TerimaKasih");

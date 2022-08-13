// membuat obj dengan constructur
function juraganAngkot(sopir, tujuan, penumpang, kas) {
  this.sopir = sopir;
  this.tujuan = tujuan;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    //tambahkan namaPenumpang ke dalam array penumpang
    this.penumpang.push(namaPenumpang);
    return penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      console.log("Penumpang Kosong");
      return false;
    }
    for (let i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang = undefined;
        this.kas += bayar;
        return this.penumpang;
      }
    }
  };
}

let angkot1 = new juraganAngkot("Cipta", ["Denpasar", "Singaraja"], [], 0);
angkot1.penumpangNaik("Agus");
angkot1.penumpangTurun("Agus", 2500);
console.log(angkot1.penumpang);
console.log(angkot1.kas);

// let angkot2 = new juraganAngkot("Joni", ["Badung", "Gianyar"], [], 0);

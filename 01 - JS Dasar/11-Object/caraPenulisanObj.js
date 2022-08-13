// function declaration
function buatObjectMahasiswa(nama, nim, email, jurusan) {
  let mhs = {};
  mhs.nama = nama;
  mhs.nim = nim;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}

let mhs1 = buatObjectMahasiswa("Cipta", 200030282, "ciptacoding@gmail.com", "Sistem Informasi");

console.log(mhs1);

// cara yang paling sering digunakan
// constructur
function mahasiswa(nama, nim, email, jurusan) {
  this.nama = nama;
  this.nim = nim;
  this.email = email;
  this.jurusan = jurusan;
}
// this = mengembalikan objek yang baru dibuat
let mhs2 = new mahasiswa("Joni", 200030278, "joni@gmail.com", "sistem kumputer");
console.log(mhs2);

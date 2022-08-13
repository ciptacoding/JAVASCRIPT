let penumpang = ["Dwipa", undefined, "Jaya"];

let tambahPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      } else if (penumpang[i] == namaPenumpang) {
        console.log(`${namaPenumpang} sudah ada di dalam angkot`);
        return penumpang;
      } else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
};

let hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    console.log(`Penumpang Angkot Kosong`);
    return penumpang;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log(`Nama Yang Anda Masukan Tidak Sesuai`);
        return penumpang;
      }
    }
  }
};

tambahPenumpang("Dwipa", penumpang);
console.log(penumpang);

hapusPenumpang("Jaya", penumpang);
console.log(penumpang);

let mhs = ["cipta", undefined, "jaya"];

// membuat function ekspression tambah mhs
let tambahMhs = function (namaMhs, mhs) {
  // jika array mhs kosong
  if (mhs.length == 0) {
    mhs.push(namaMhs);
    return mhs;
    // jika tidak
  } else {
    // telusuri index dari 0 - panjang array mhs
    for (i = 0; i < mhs.length; i++) {
      if (mhs[i] == undefined) {
        mhs[i] = namaMhs;
        return mhs;
      } else if (mhs[i] == namaMhs) {
        console.log(`${namaMhs} sudah ada terdaftar`);
        return mhs;
      } else if (i == mhs.length - 1) {
        mhs.push(namaMhs);
        return mhs;
      }
    }
  }
};

tambahMhs("dwipa", mhs);
console.log(mhs);

// membuat function expression hapus mhs
let hapusMhs = function (namaMhs, mhs) {
  if (mhs.length == 0) {
    console.log("Data Mahasiswa Kosong");
    return mhs;
  } else {
    for (let i = 0; i < mhs.length; i++) {
      if (mhs[i] == namaMhs) {
        mhs[i] = undefined;
        return mhs;
      } else if (i == mhs.length - 1) {
        console.log("Nama Tidak Sesuai Dengan Data");
        return mhs;
      }
    }
  }
};

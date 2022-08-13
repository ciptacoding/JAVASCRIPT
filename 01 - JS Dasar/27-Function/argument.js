function tambah() {
  hasil = 0;
  for (let i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
    // 0+i+i+i dst (dijumlahkan dengan isi dari argument)
  }
  return hasil;
}

let total = tambah(2, 4, 6);
console.log(total);

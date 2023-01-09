let mhs = {
  nama: "Cipta",
  umur: 21,
  ipSemester: [3.25, 3.5, 3.65],
  alamat: {
    desa: "Punggul",
    kecamatan: "Abiansemal",
    kabupaten: "Badung",
    provinsi: "Bali",
  },
  ipKumulatif: function () {
    let total = 0;
    let ips = this.ipSemester;

    for (let i = 0; i < ips.length; i++) {
      total += ips[i]; //total = ips[i]+ips[i]+ips[i]+
    }
    return total / ips.length;
  },
};

console.log(mhs.alamat.provinsi);
console.log(mhs.ipKumulatif());

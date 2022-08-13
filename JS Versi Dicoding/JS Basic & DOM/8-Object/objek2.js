//Bahkan dalam properti objek, kita dapat menyimpan nilai objek lainnya. Contohnya properti firstName dan lastName dapat dikelompokan kembali dalam sebuah objek baru sebagai berikut:
let user = {
    name : {
        first : "Cipta",
        last : "Dwipajaya"
    },
    age : 21,
    hobby : ["Olahraga", "Hiking", "Coding"]
};
//Untuk mendapatkan nilainya kita perlu mengakses properti dari objek user kemudian name. Sehingga penulisannya menjadi seperti berikut:
console.log("Nama saya " + user.name.first + " " + user.name.last + ".");
console.log("Umur saya " + user.age + ".");
console.log("Hobi saya " + user.hobby + ".");
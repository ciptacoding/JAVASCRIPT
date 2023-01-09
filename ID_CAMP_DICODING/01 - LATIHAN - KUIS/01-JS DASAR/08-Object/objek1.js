/*Objek serupa dengan array yang dapat menampung banyak nilai dengan tipe data yang beragam. Untuk mengelola data menggunakan objek, bedanya objek diakses tidak melalui indexing,  melainkan menggunakan pendekatan key-value. Untuk mengakses nilainya kita gunakan key. Key juga biasa disebut dengan properti.
Untuk menetapkan objek pada variabel gunakan tanda kurung kurawal { } dalam menginisialisasinya. Kemudian di dalamnya kita tetapkan key: value.*/

let pengguna ={ //variabel
    firstName : "Cipta", //properti, key-value
    lastName : "Dwipajaya",//properti, key-value
    age : 21, //properti, key-value
    hobby : ["Olahraga", "Hiking", "Coding"] //properti, key-value
};
//Kemudian untuk mengakses nilai dari properti objek kita dapat gunakan tanda titik diikuti dengan nama properti-nya. Contoh:
console.log("Halo, Nama Saya " + pengguna.firstName + " " + pengguna.lastName);

console.log("Umur Saya " + pengguna.age + " Dan Hobi " + pengguna.hobby);
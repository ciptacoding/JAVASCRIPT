//Fungsi Return

//Dengan nilai kembalian, kita dapat membuat function yang berfungsi untuk melakukan perhitungan matematika dan hasilnya dapat langsung kita masukkan ke dalam sebuah variabel. Contohnya seperti ini:
function multiply(a,b){
    return a*b;
}
let hasil = multiply(10,12); //memasukan function ke variabel hasil
console.log(hasil); //mencetak variabel hasil

//Untuk tipe data string
//kelebihan return adalah hasil kembaliannya dapat langsung kita masukkan ke dalam sebuah variabel. 
function Salam(bahasa, nama){
    if(bahasa == "Indonesia"){
        return "Selamat Pagi " + nama + "!";
    }else{
        return "Good Morning " + nama + "!";
    }
}
let Greeting = Salam("Indonesia", "Cipta");
console.log(Greeting);

//catatan : Yang perlu kita perhatikan lagi, ketika statement return tereksekusi, maka fungsi akan langsung terhenti dan mengembalikan nilai.
//Sebisa mungkin kita harus menghindari pembuatan variabel global, karena variabel global dapat diakses pada seluruh script yang kita tuliskan. Semakin banyak variabel global yang kita tuliskan, semakin tinggi kemungkinan variabel tabrakan (collision) terjadi.


function multiply(num){
    let total = num * num; // rumus dari variabel lokal total
    return total // mengembalikan nilai total
}

let total = 9; // mengubah nilai variabel total menjadi sembilan
let number = multiply(20); // walaupun sekarang diinisialisasi nilai variabel akan tetap 9

console.log(total); //mencetak variabel total
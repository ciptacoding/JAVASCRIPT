//mode strict adalah mode yang memaksakan penulisan program javascript yang baik dan aman. contoh penulisannya :
"use strict";

x = 9; // ini akan dianggap error karena variabel tidak dideklarasikan menggunakan var, let , atau const
console.log(x);

let x = 9; // ini tidak dianggap error
console.log(x);

function pembagian(bil1, bil2){
    hasil = bil1 / bil2; // ini akan dianggap error
    return hasil;
}

function pembagian(bil1, bil2){
    let hasil = bil1 / bil2; // ini tidak akan dianggap error
    return hasil;
}
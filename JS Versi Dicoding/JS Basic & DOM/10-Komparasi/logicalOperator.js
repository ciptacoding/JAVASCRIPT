
let a = 10;
let b = 20;

/* AND operator = semua nilai harus benar agar menghasilkan nilai true */
console.log(a < 12 && b > 15) // (true && true) = true.
console.log(a < 8 && b < 25) // (false && true) = false.

/* OR operator = salah satu nilai harus benar agar menghasilkan nilai true */
console.log(a < b || a > b) // (true || false) = true.
console.log(a > 15 || b < 18) // (false || false) = false.

/* NOT operator = digunakan untuk membalikan suatu kondisi. */
console.log(!(a < 15)) // !(true) -> false.
console.log(!(a > 13 && b < 25 )) // !(false && true) -> !false = true.
console.log(!(a < 12 || b < 15)) // !(true OR false) -. !true = false.
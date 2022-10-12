// menambah elemen li dengan appenchild
const newLi = document.createElement("li");
newLi.innerText = "Selamat Menikmati!";
const daftarUl = document.getElementById("daftar");
// masukan newLi ke daftarUl
daftarUl.appendChild(newLi);

/* <--------------------------- Pembatas ------------------------> */

// menambah elemen li dengan insertBefore
const liStart = document.createElement("li");
liStart.innerText = "Hidupkan Kompor";
const itemLi = document.getElementById("awal");
// sisipkan liStart sebelum itemLi dan masukan ke dalam daftarUl
daftarUl.insertBefore(liStart, itemLi);

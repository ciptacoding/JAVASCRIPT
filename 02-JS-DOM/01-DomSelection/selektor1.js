// Dom selection

// 1. document.getElementById => mengembalikan/menghasilkan ELEMENT
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "#ccc";
judul.innerHTML = "Cipta Dwipajaya";

// 2. document.getElementsByTagName => return HTMLcollection (array)
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}
const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

// 3. document.getElementsByClassName => return HTMLcollection (array)
const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "Ini diubah menggunakan JS DOM";

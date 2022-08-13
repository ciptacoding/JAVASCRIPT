// 1. InnerHtml = mengubah tag atau tulisan
const judul = document.getElementById("judul");
judul.innerHTML = "<em>Halo Gais</em>";

// const sectionA = document.getElementById("a");
// sectionA.innerHTML = "Welcome To My Gais";

// 2. setAtributte() = menambahkan atribut
const a = document.querySelector("section#a a");
a.setAttribute("id", "link");

// // 3. getAtribbute() = mengetahui isi dari atributte
a.getAttribute("href");

// // 4. removeAtributte() = menghapus atribbute
a.removeAttribute("href");

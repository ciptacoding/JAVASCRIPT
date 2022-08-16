// Dom manipulation

// 1. document.createElement() = buat elemen baru
// 2. document.createTextNode() = buat text untuk elemen baru
// 3. node.appenchild() = menentukan tempat penyimpanan
// 4. node.insertBefore() = menentukan tempat penyimpanan
// 5. parentNode.removeChild() = menghapus element
// 6. parentNode.replaceChild() = menimpa element

//menambah paragraf baru
const newP = document.createElement("p");
const textP = document.createTextNode("Paragraf baru dari JS");
newP.appendChild(textP); // masukan variabel textP ke dalam newP
// tentukan dimana elemen akan ditaruh
const sectionA = document.getElementById("a");
sectionA.appendChild(newP); // masukan newP ke dalam sectionA

/*
cara menggunakan insertBefore
*/
const newLi = document.createElement("li");
const textLi = document.createTextNode("Item Baru Dari Js");
newLi.appendChild(textLi);
const ul = document.querySelector("section#b ul"); //tentukan tempat
const li2 = ul.querySelector("li:nth-child(2)"); //tentukan posisi sebelum
ul.insertBefore(newLi, li2);

/*
menghapus link instagram
*/
const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

/* 
replace paragraf 4
*/
const newH2 = document.createElement("h2");
const newText = document.createTextNode("Judul Baru Dari Js");
newH2.appendChild(newText);
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");
sectionB.replaceChild(newH2, p4);

// styling pada elemen baru dibuat
newP.style.backgroundColor = "orange";
newLi.style.backgroundColor = "orange";
newH2.style.backgroundColor = "orange";

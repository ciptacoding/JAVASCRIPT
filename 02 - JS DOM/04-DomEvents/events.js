// 1. event handler = jika ditulis lebih dari 1 kali maka function/elemen terakhir akan menimpa function/elemen sebelumnya

// 2. addEventListener = tidak menimpa function/elemen sebelumnya meskipun ditulis lebih dari 1 kali

// versi event handler
const p2 = document.querySelector(".p2");

p2.onclick = function () {
  p2.style.backgroundColor = "lightblue";
};
p2.onclick = function () {
  p2.style.color = "red";
};

/* 
space
*/

// versi addEventListener
const p3 = document.querySelector(".p3");

p3.addEventListener("click", function () {
  p3.style.backgroundColor = "orange";
});
p3.addEventListener("click", function () {
  p3.style.color = "red";
});

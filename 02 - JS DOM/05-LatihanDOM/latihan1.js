// 1. dengan cara mengambil elemen html
const body = document.querySelector("body");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  body.classList.toggle("background");
});

// 2
// cara kedua
const newBtn = document.createElement("button");
const btnText = document.createTextNode("Red Theme");
newBtn.appendChild(btnText);
newBtn.setAttribute("type", "button");
btn.after(newBtn);

newBtn.onclick = function () {
  document.body.classList.toggle("background-red");
};

// 3
// membuat tombol acak warna
const btnAcak = document.createElement("button");
const acakText = document.createTextNode("Random Theme");
btnAcak.appendChild(acakText);
btnAcak.setAttribute("type", "button");
newBtn.after(btnAcak);

btnAcak.addEventListener("click", function () {
  // membuat rumus warna acak
  let r = Math.round(Math.random() * 255 + 1);
  let g = Math.round(Math.random() * 255 + 1);
  let b = Math.round(Math.random() * 255 + 1);
  //rumus= math.dibulatkan_keatas(Angka.random(0 sampai 1) * 255 + 1)
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

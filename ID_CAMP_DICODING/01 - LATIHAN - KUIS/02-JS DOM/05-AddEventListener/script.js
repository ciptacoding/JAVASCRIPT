// membuat function welcome
function welcome() {
  alert("munculah elemen elemen HTML");
  const contents = document.querySelector(".contents");
  contents.removeAttribute("hidden");
}
// memanggil function welcome ketika user me-refresh website
window.addEventListener("load", welcome);

/*<-------------------------Pembatas------------------------->*/

// membuat function click button
function count() {
  const count = document.getElementById("count");
  count.innerText++;

  if (count.innerText == 7) {
    const pesan = document.createElement("h4");
    pesan.innerText = "Anda Mendapatkan Hadiah Tersembunyi!";
    const gambar = document.createElement("img");
    gambar.setAttribute("src", "https://i.ibb.co/0V49VRZ/catto.jpg");
    const joinContents = document.querySelector(".contents");
    joinContents.appendChild(pesan);
    joinContents.appendChild(gambar);
  }
}
// memanggil function count setiap button di klik
const btn = document.getElementById("incrementButton");
btn.addEventListener("click", count);

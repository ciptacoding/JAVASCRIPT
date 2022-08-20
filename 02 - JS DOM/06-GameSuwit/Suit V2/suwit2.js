// function mengatur pilihan comp
function pilihanComp() {
  const comp = Math.random();

  if (comp <= 0.35) return "gajah";
  if (comp <= 0.66) return "orang";
  return "semut";
}

// function rules suwit
function rules(computer, player) {
  if (player === computer) return "SERI!";
  if (player === "gajah") return computer === "orang" ? "ANDA MENANG!" : "ANDA KALAH!";
  if (player === "orang") return computer === "gajah" ? "ANDA KALAH!" : "ANDA MENANG!";
  if (player === "semut") return computer === "orang" ? "ANDA KALAH!" : "ANDA MENANG!";
}

const pilihan = document.querySelectorAll("li img");
// foreach = perulangan
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComputer = pilihanComp();
    const pilihanPlayer = pil.className;
    const hasil = rules(pilihanComputer, pilihanPlayer);

    // mengubah tampilan gambar computer
    const imgComputer = document.querySelector(".img-computer");
    imgComputer.setAttribute("src", `assets/${pilihanComputer}.png`);

    // memasukan hasil
    const info = document.querySelector(".area-info");
    info.innerHTML = hasil;
  });
});

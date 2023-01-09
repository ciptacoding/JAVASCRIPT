document.addEventListener("DOMContentLoaded", function () {
  const inputMaxLengthOnLoad = document.getElementById("inputNama").maxLength;
  document.getElementById("sisaKarakter").innerText = inputMaxLengthOnLoad;

  // event input
  // membuat tampilan max karakter pada input nama
  document.getElementById("inputNama").addEventListener("input", function () {
    const jumlahKarakterDiketik = document.getElementById("inputNama").value.length;
    const jumlahKarakterMaksimal = document.getElementById("inputNama").maxLength;

    console.log("jumlahKarakterDiketik", jumlahKarakterDiketik);
    console.log("jumalahKarakterMaksimal", jumlahKarakterMaksimal);
    const sisaKarakterUpdate = jumlahKarakterMaksimal - jumlahKarakterDiketik;
    document.getElementById("sisaKarakter").innerText = sisaKarakterUpdate.toString();

    if (sisaKarakterUpdate === 0) {
      document.getElementById("sisaKarakter").innerText = "Batas Maksimal Karakter";
    } else if (sisaKarakterUpdate <= 5) {
      document.getElementById("notifikasiSisaKarakter").style.color = "red";
    } else {
      document.getElementById("notifikasiSisaKarakter").style.color = "black";
    }
  });

  // event onFocus = agar tampilan notifikasi sisa Karakter terlihat pada saat input diklik
  document.getElementById("inputNama").addEventListener("focus", function () {
    console.log("inputNama : focus");
    document.getElementById("notifikasiSisaKarakter").style.visibility = "visible";
  });

  // event onBlur = agar tampilan notifikasi sisa Karakter hilang pada saat input selain Nama di klik
  document.getElementById("inputNama").addEventListener("blur", function () {
    console.log("inputNama : blur");
    document.getElementById("notifikasiSisaKarakter").style.visibility = "hidden";
  });

  // event onChange
  document.getElementById("inputCaptcha").addEventListener("change", function () {
    console.log("inputCaptcha: change");
    const inputCaptcha = document.getElementById("inputCaptcha").value;
    const submitButtonStatus = document.getElementById("submitButton");

    if (inputCaptcha === "PRNU") {
      submitButtonStatus.removeAttribute("disabled");
    } else {
      submitButtonStatus.setAttribute("disabled", "");
    }
  });

  document.getElementById("formDataDiri").addEventListener("submit", function (e) {
    const inputCaptcha = document.getElementById("inputCaptcha").value;

    if (inputCaptcha === "PRNU") {
      alert("Captcha Anda Berhasil");
    } else {
      alert("Maaf Captcha Anda Kurang Tepat ");
      document.getElementById("submitButton").setAttribute("disabled", "");
    }
    e.preventDefault();
  });

  // event onCopy
  document.getElementById("inputCopy").addEventListener("copy", function () {
    alert("Anda Telah Men-copy sesuatu");
  });

  // event onPaste
  document.getElementById("inputPaste").addEventListener("paste", function () {
    alert("Anda Telah Men-paste sesuatu");
  });
});

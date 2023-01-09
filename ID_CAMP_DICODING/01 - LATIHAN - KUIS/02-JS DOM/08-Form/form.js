const submitAction = document.getElementById("formDataDiri");

submitAction.addEventListener("submit", function (e) {
  const inputNama = document.getElementById("inputNama").value;
  const inputDomisili = document.getElementById("inputDomisili").value;
  const message = `Halo ${inputNama} Bagaimana Cuaca Di ${inputDomisili} ?`;

  document.getElementById("messageAfterSubmit").innerText = message;
  e.preventDefault();
});

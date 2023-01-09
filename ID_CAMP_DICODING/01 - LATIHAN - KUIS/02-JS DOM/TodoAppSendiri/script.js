// DEKLARASI VARIABEL
const myArray = [];
const RENDER_EVENT = "render-todo";

// FUNCTION BUAT ID
function buatId() {
  return +new Date();
}

// FUNCTION BUAT DATA OBJECT
function buatDataObject(id, judul, tanggal, selesai) {
  return {
    id,
    judul,
    tanggal,
    selesai,
  };
}

// FUNCTION BUAT TODO
function buatTodo(dataObject) {
  document.createElement();
}

// FUNGSI TAMBAH TODO
function tambahTodo() {
  const judulTodo = document.getElementById("title").value;
  const tanggalTodo = document.getElementById("date").value;

  const id = buatId();
  const dataObject = buatDataObject(id, judulTodo, tanggalTodo, false);
  myArray.push(dataObject);

  document.dispatchEvent(new Event(RENDER_EVENT));
}

// KETIKA ELEMENT FORM DI SUBMIT
document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("form");
  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    tambahTodo();
  });
});

document.addEventListener(RENDER_EVENT, function () {
  console.log(myArray);
});

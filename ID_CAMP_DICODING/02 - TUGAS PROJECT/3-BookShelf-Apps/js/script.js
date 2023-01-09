document.addEventListener("DOMContentLoaded", () => {
  const inputSearch = document.getElementById("input-search");
  const submitForm = document.getElementById("form");

  inputSearch.addEventListener("keyup", () => {
    searchBook(inputSearch.value);
  });

  submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addBook();
    modalToggle();
  });

  const modalBtns = document.querySelectorAll(".modal-btn");
  const modal = document.querySelector(".modal");
  const modalClose = document.querySelector(".modal-close");
  const modalCloseBtn = document.querySelector(".modal-close-btn");

  for (const modal of modalBtns) {
    modal.addEventListener("click", (e) => {
      e.preventDefault();

      modalToggle();

      if (e.target.classList.contains("read")) {
        submitForm.isCompleted.checked = true;
      } else {
        submitForm.isCompleted.checked = false;
      }
    });
  }

  modalClose.addEventListener("click", (e) => {
    e.preventDefault();
    modalToggle();
  });

  modalCloseBtn.addEventListener("click", () => {
    modalToggle();
  });

  modal.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) modalToggle();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key == "Escape" && document.querySelector(".modal.modal-show")) {
      modalToggle();
    }
  });

  function modalToggle() {
    if (getComputedStyle(modal).display === "flex") {
      modal.classList.add("modal-hide");
      setTimeout(() => {
        document.body.style.overflow = "initial";
        modal.style.display = "none";
        modal.classList.remove("modal-hide", "modal-show");
      }, 200);
    } else {
      document.body.style.overflow = "hidden";
      modal.style.display = "flex";
      modal.classList.add("modal-show");
    }
  }

  if (isStorageExist()) loadDataFromStorage();
});

document.addEventListener("ondatasaved", () => {
  const submitForm = document.getElementById("form");

  submitForm.title.value = "";
  submitForm.author.value = "";
  submitForm.year.value = "";

  console.log("saved");
});

document.addEventListener("ondataloaded", () => {
  refreshDataFromBook();
});

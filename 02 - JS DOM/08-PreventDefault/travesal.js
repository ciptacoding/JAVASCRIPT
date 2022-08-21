// const btnClose = document.querySelectorAll(".close");

// for (let i = 0; i < btnClose.length; i++) {
//   btnClose[i].addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//   });
// }

/*<-------------------------Pembatas------------------------------> */
// cara lebih efektif
const btnClose = document.querySelectorAll(".close");

btnClose.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  });
});

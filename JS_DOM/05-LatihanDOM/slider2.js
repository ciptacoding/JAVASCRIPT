// 1
// input[name=sRed] = untuk menangkap value name dari tag input
const redSlider = document.querySelector("input[name=sRed]");

redSlider.addEventListener("input", function () {
  const r = redSlider.value; //mengambil value min & max
  const g = greenSlider.value; //mengambil value min & max
  const b = blueSlider.value; //mengambil value min & max
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

/*<-------------------------Pembatas-------------------------> */
// 2
const greenSlider = document.querySelector("input[name=sGreen]");

greenSlider.addEventListener("input", function () {
  const r = redSlider.value; //mengambil value min & max
  const g = greenSlider.value; //mengambil value min & max
  const b = blueSlider.value; //mengambil value min & max
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

/*<-------------------------Pembatas-------------------------> */
// 3
const blueSlider = document.querySelector("input[name=sBlue]");

blueSlider.addEventListener("input", function () {
  const r = redSlider.value; //mengambil value min & max
  const g = greenSlider.value; //mengambil value min & max
  const b = blueSlider.value; //mengambil value min & max
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

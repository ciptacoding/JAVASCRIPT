// 1. parentNode.prepend() => sebelum
// 2. parentNode.append() => sesudah
// 3. childNode.before()
// 4. childNode.after()
// 5. childNode.remove()
// 6. childNode.replace()

// 1
const newP = document.createElement("p");
const textP = document.createTextNode("paragraf 0 JS");
newP.appendChild(textP);
const sectionA = document.getElementById("a");
sectionA.prepend(newP);

// 2
const newLi = document.createElement("li");
const liText = document.createTextNode("Item 4 JS");
newLi.appendChild(liText);
const sectionB = document.querySelector("section#b ul");
sectionB.append(newLi);

// 3
const newH2 = document.createElement("h2");
const h2Text = document.createTextNode("List Item JS");
newH2.appendChild(h2Text);
// cari tahu?!

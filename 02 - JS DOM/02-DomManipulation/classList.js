const p3 = document.querySelector(".p3");
// 1. element.classList.add() = menambah class
p3.classList.add("label");
p3.classList.add("tiga");

// 2. element.classList.remove() = menghapus class
p3.classList.remove("label");

// 3. element.classList.toggle() = menambahkan class jika blm ada dan menghapus class jika sudah ada
p3.classList.toggle("menu");

// 4. element.classList.item() = mengecek urutan class
p3.classList.item(1);

// 5. element.classList.contains() = mengecek ada atau tidaknya class
p3.classList.contains("menu");

// 6. element.classList.replace() = menggantikan/menimpa class
p3.classList.replace("tiga", "empat");

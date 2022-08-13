var a = 2;

function test(a) {
  // lokal scope
  console.log(a);
}
test(a); //mengakses variabel global scope
console.log(a);

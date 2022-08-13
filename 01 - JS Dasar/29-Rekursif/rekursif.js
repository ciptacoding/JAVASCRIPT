function perulanganMundur(n) {
  if (n === 0) {
    //base case agar tidak infinite looping
    return;
  }
  console.log(n);
  return perulanganMundur(n - 1);
}

perulanganMundur(20);

const ev = (a, n) => {
  let res = 0;
  for (let j = 0; j < a; j++) {
    console.log(j % n); // остаток от деления j на n
  }
};
ev(17, 3);

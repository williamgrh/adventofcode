module.exports = (input) => {
  input = input.map((n) => parseInt(n, 10));
  let n = 0,
    i = 0;
  while (input[i] !== undefined) {
    let j = input[i];
    j > 2 ? input[i]-- : input[i]++;
    i += j;
    n++;
  }
  return n;
};

module.exports = (input) => {
  input = input.map(n => parseInt(n, 10));
  let n = 0, i = 0;
  while (input[i] !== undefined) {
    input[i] += 1;
    i += input[i] - 1;
    n++;
  }
  return n;
};
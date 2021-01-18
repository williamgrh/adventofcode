module.exports = (input) => {
  input = parseInt(input, 10);
  let c = 1,
    j = 2,
    ans = 1;
  for (let i = 2; i <= 5e7; i++) {
    c = ((c + input) % j) + 1;
    if (c === 1) ans = i;
    j++;
  }
  return ans;
};

module.exports = (input) => {
  input = input.map((s) =>
    s
      .trim()
      .split("x")
      .map((n) => parseInt(n))
      .sort((a, b) => a - b)
  );
  var total = 0;
  input.forEach((present) => {
    total +=
      3 * present[0] * present[1] +
      2 * (present[1] * present[2] + present[2] * present[0]);
  });
  return total;
};

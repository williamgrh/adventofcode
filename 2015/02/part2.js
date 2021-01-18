module.exports = (input) => {
  return input
    .map((s) => {
      let a = s
        .trim()
        .split("x")
        .map((n) => parseInt(n))
        .sort((a, b) => a - b);
      return {
        p: 2 * (a[0] + a[1]),
        v: a[0] * a[1] * a[2],
      };
    })
    .reduce((a, g) => a + g.p + g.v, 0);
};

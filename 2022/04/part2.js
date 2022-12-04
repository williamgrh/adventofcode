module.exports = (input) => {
  return input.reduce((count, pair) => {
    const [a, b, x, y] = pair.split(/-|,/).map((section) => Number(section));

    if (
      (a <= x && b >= y) ||
      (x <= a && y >= b) ||
      (a >= x && a <= y) ||
      (b >= x && b <= y)
    ) {
      count += 1;
    }

    return count;
  }, 0);
};

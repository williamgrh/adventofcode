module.exports = (input) => {
  return input.reduce((count, pair) => {
    const [a, b, x, y] = pair.split(/-|,/).map((section) => Number(section));
    if ((x <= a && y >= b) || (a <= x && b >= y)) {
      count += 1;
    }

    return count;
  }, 0);
};

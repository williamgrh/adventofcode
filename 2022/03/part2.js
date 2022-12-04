module.exports = (input) => {
  let total = 0;

  for (let i = 0; i < input.length; i += 3) {
    const items = input[i]
      .split("")
      .filter((item) => input[i + 1].indexOf(item) >= 0);
    input[i + 2].split("").every((item) => {
      if (items.indexOf(item) >= 0) {
        if (item.toUpperCase() === item) {
          total += item.charCodeAt(0) - 38;
        } else {
          total += item.charCodeAt(0) - 96;
        }

        return false;
      }

      return true;
    });
  }
  return total;
};

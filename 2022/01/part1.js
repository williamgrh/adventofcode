module.exports = (input) => {
  let elf = { index: 0, total: 0 };
  let current = { index: 1, total: 0 };

  input.forEach((food) => {
    if (food === "") {
      if (current.total > elf.total) {
        elf = Object.assign({}, current);
      }

      current.index++;
      current.total = 0;
    }

    current.total += Number(food);
  });

  return elf.total;
};

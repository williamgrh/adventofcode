module.exports = (input) => {
  let elves = [
    { index: 0, total: 0 },
    { index: 0, total: 0 },
    { index: 0, total: 0 },
  ];
  let current = { index: 1, total: 0 };

  input.forEach((food, index) => {
    if (food === "" || index === input.length - 1) {
      current.total += Number(food);
      if (current.total > elves[0].total) {
        elves.splice(0, 0, Object.assign({}, current));
        elves.pop();
      } else if (current.total > elves[1].total) {
        elves.splice(1, 0, Object.assign({}, current));
        elves.pop();
      } else if (current.total > elves[2].total) {
        elves.splice(2, 0, Object.assign({}, current));
        elves.pop();
      }

      current.index++;
      current.total = 0;
    }

    current.total += Number(food);
  });

  return elves.reduce((acc, elf) => acc + elf.total, 0);
};

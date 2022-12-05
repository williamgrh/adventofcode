module.exports = (input) => {
  // find boundaries of input
  const rows = input.findIndex((line) => line.indexOf(" 1 ") === 0);
  const columns = Number(
    input[rows].substr(input[rows].length - 2, input[rows].length - 1)
  );

  // rotate input
  let stacks = new Array(columns).fill(null).map(() => new Array());
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const supply = input[i].charAt(j * 4 + 1);
      if (supply !== " ") {
        stacks[j].push(supply);
      }
    }
  }

  // perform sequence
  for (let i = rows + 2; i < input.length; i++) {
    const [_, num, from, to] = input[i].split(/move | from | to /).map(Number);
    for (let j = 0; j < num; j++) {
      const top = stacks[from - 1].shift();
      if (top !== " ") {
        stacks[to - 1].splice(0, 0, top);
      }
    }
  }

  return stacks.map((stack) => stack[0]).join("");
};

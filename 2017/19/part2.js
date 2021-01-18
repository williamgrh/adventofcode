module.exports = (input) => {
  let letters = [],
    y = 0,
    x = input[y].indexOf("|"),
    dir = "d",
    steps = 0;

  const move = (x, y, dir) => {
    if (dir === "u") y--;
    if (dir === "d") y++;
    if (dir === "l") x--;
    if (dir === "r") x++;
    steps++;
    return [x, y];
  };

  const nextDir = (x, y, dir) => {
    if (dir === "u" || dir === "d") return input[y][x - 1] === "-" ? "l" : "r";
    if (dir === "l" || dir === "r") return input[y - 1][x] === "|" ? "u" : "d";
  };

  while (true) {
    if (input[y][x] === " ") break;
    else if (input[y][x].match(/[A-Z]/)) letters.push(input[y][x]);
    else if (input[y][x] === "+") dir = nextDir(x, y, dir);
    [x, y] = move(x, y, dir);
  }

  return steps;
};

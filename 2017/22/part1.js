module.exports = (input) => {
  let grid = {},
    infections = 0,
    dir = 0,
    x = (y = (input.length - 1) / 2);

  const move = () => {
    if (dir === 0) y--;
    else if (dir === 1) x++;
    else if (dir === 2) y++;
    else if (dir === 3) x--;
  };

  const turn = (r) => (dir = (dir + (r === "right" ? 1 : 3)) % 4);

  for (let i = 0; i < 10000; i++) {
    if (!grid[`${x},${y}`]) {
      if (x < 0 || x >= input.length || y < 0 || y >= input.length)
        grid[`${x},${y}`] = ".";
      else grid[`${x},${y}`] = input[y][x];
    }

    if (grid[`${x},${y}`] === ".") {
      turn("left");
      grid[`${x},${y}`] = "#";
      infections++;
    } else if (grid[`${x},${y}`] === "#") {
      turn("right");
      grid[`${x},${y}`] = ".";
    }

    move();
  }

  return infections;
};

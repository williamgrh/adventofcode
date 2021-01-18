module.exports = (input) => {
  let x = 0,
    y = 0,
    grid = { "0,0": 1 },
    move = "right";

  function getSum() {
    return (
      (grid[`${x + 1},${y - 1}`] || 0) +
      (grid[`${x + 1},${y}`] || 0) +
      (grid[`${x + 1},${y + 1}`] || 0) +
      (grid[`${x},${y + 1}`] || 0) +
      (grid[`${x - 1},${y + 1}`] || 0) +
      (grid[`${x - 1},${y}`] || 0) +
      (grid[`${x - 1},${y - 1}`] || 0) +
      (grid[`${x},${y - 1}`] || 0)
    );
  }

  while (grid[`${x},${y}`] < input) {
    switch (move) {
      case "up":
        y++;
        if (!grid[`${x - 1},${y}`]) move = "left";
        break;
      case "down":
        y--;
        if (!grid[`${x + 1},${y}`]) move = "right";
        break;
      case "right":
        x++;
        if (!grid[`${x},${y + 1}`]) move = "up";
        break;
      case "left":
        x--;
        if (!grid[`${x},${y - 1}`]) move = "down";
        break;
    }
    grid[`${x},${y}`] = getSum();
  }

  return grid[`${x},${y}`];
};

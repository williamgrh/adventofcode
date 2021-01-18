const _ = require("lodash");
const knotHash = require("../10/part2");
module.exports = (input) => {
  let disk = [],
    usedRegions = 0;
  for (let i = 0; i < 128; i++) {
    disk.push(
      knotHash(input + "-" + i.toString())
        .split("")
        .map((h) => parseInt(h, 16).toString(2).padStart(4, "0"))
        .join("")
        .split("")
    );
  }

  const clearRegion = (x, y) => {
    disk[y][x] = "0";
    if (x > 0 && disk[y][x - 1] === "1") clearRegion(x - 1, y);
    if (x < 127 && disk[y][x + 1] === "1") clearRegion(x + 1, y);
    if (y > 0 && disk[y - 1][x] === "1") clearRegion(x, y - 1);
    if (y < 127 && disk[y + 1][x] === "1") clearRegion(x, y + 1);
  };

  for (let i = 0; i < 128; i++) {
    for (let j = 0; j < 128; j++) {
      if (disk[i][j] === "1") {
        usedRegions++;
        clearRegion(j, i);
      }
    }
  }

  return usedRegions;
};

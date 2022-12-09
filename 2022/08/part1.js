module.exports = (input) => {
  const gridSize = input.length;
  const visibleTrees = new Set(); // set of x,y of visible trees

  for (let a = 1; a < gridSize - 1; a++) {
    // set tallest to border trees
    const tallestIndex = [0, gridSize - 1, 0, gridSize - 1];

    // border trees are alwabs visible
    visibleTrees
      .add(`${tallestIndex[0]},${a}`)
      .add(`${tallestIndex[1]},${a}`)
      .add(`${a},${tallestIndex[2]}`)
      .add(`${a},${tallestIndex[3]}`);

    for (let b = 1; b < gridSize; b++) {
      // check horizontal, left to right
      if (input[a].charAt(b) > input[a].charAt(tallestIndex[0])) {
        visibleTrees.add(`${b},${a}`);
        tallestIndex[0] = b;
      }

      // check horizontal, right to left
      if (input[a].charAt(gridSize - b) > input[a].charAt(tallestIndex[1])) {
        visibleTrees.add(`${gridSize - b},${a}`);
        tallestIndex[1] = gridSize - b;
      }

      // check vertical, top to bottom
      if (input[b].charAt(a) > input[tallestIndex[2]].charAt(a)) {
        visibleTrees.add(`${a},${b}`);
        tallestIndex[2] = b;
      }

      // check vertical, bottom to top
      if (
        input[gridSize - b - 1].charAt(a) > input[tallestIndex[3]].charAt(a)
      ) {
        visibleTrees.add(`${a},${gridSize - b - 1}`);
        tallestIndex[3] = gridSize - b - 1;
      }
    }
  }

  return visibleTrees.size + 4;
};

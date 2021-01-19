function countTrees(right, down, input) {
  let trees = 0;
  let x = 0;
  for (let y = 0; y < input.length; y += down) {
    if (input[y][x] === "#") {
      trees += 1;
    }

    x += right;
    x %= input[y].length;
  }

  return trees;
}

module.exports = (input) => {
  return (
    countTrees(1, 1, input) *
    countTrees(3, 1, input) *
    countTrees(5, 1, input) *
    countTrees(7, 1, input) *
    countTrees(1, 2, input)
  );
};

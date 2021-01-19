module.exports = (input) => {
  let trees = 0;
  let x = 0;
  input.map((line) => {
    if (line[x] === "#") {
      trees += 1;
    }

    x += 3;
    x %= line.length;
  });

  return trees;
};

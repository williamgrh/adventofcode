module.exports = (input) => {
  var visited = new Set();
  var loc = [0, 0];
  visited.add(`${loc[0]},${loc[1]}`);
  for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
      case ">":
        loc[0]++;
        break;
      case "<":
        loc[0]--;
        break;
      case "^":
        loc[1]++;
        break;
      case "v":
        loc[1]--;
        break;
      default:
        break;
    }
    visited.add(`${loc[0]},${loc[1]}`);
  }
  return visited.size;
};

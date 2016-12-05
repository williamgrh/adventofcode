module.exports = (input) => {
  var visited = new Set();
  var loc = [[0, 0], [0, 0]];
  visited.add(`${loc[0][0]},${loc[0][1]}`);
  for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
      case '>':
        loc[i%2][0]++;
        break;
      case '<':
        loc[i%2][0]--;
        break;
      case '^':
        loc[i%2][1]++;
        break;
      case 'v':
        loc[i%2][1]--;
        break;
      default:
        break;
    }
    visited.add(`${loc[i%2][0]},${loc[i%2][1]}`);
  }
  return visited.size;
};
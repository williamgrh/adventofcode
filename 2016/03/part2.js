module.exports = (input) => {
  // parse input data
  var data = input.map(s => s.trim().split(/ +/).map(n => parseInt(n)));

  var possibleCount = 0;
  // loop through to check all triangles
  for (let i = 0; i < data.length; i += 3) {
    for (let j = 0; j < 3; j++) {
      if (data[i][j] + data[i+1][j] <= data[i+2][j]) {
        continue;
      } else if (data[i+1][j] + data[i+2][j] <= data[i][j]) {
        continue;
      } else if (data[i][j] + data[i+2][j] <= data[i+1][j]) {
        continue;
      }
      possibleCount += 1;
    }
  }

  return possibleCount;
};
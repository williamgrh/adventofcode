module.exports = (input) => {
  // parse input data
  var data = input.map(s => s.trim().split(/ +/).map(n => parseInt(n)));

  var possibleCount = 0;
  // loop through to check all triangles
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] + data[i][1] <= data[i][2]) {
      continue;
    } else if (data[i][1] + data[i][2] <= data[i][0]) {
      continue;
    } else if (data[i][0] + data[i][2] <= data[i][1]) {
      continue;
    }
    possibleCount += 1;
  }

  return possibleCount;
};
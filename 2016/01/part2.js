module.exports = (input) => {
  // parse the input data
  var data = input.split(", ").map((s) => {
    // convert R and L turns to positive and negative
    if (s[0] === "R") {
      return [1, parseInt(s.slice(1))];
    } else {
      return [-1, parseInt(s.slice(1))];
    }
  });

  // initial position and direction
  var coords = new Set();
  var nextCoords = [0, 0];
  coords.add(`${nextCoords[0]},${nextCoords[1]}`);
  var direction = 1;

  // loop through instructions and modify coordinates
  for (let i = 0; i < data.length; i++) {
    // use alternation to decide direction and coordinate to modify
    var alternate = i % 2 === 0;
    var signMatch = direction === data[i][0];
    direction = (alternate && signMatch) || (!alternate && !signMatch) ? 1 : -1;

    // add all points along the next path to visited coordinates set
    for (let j = 0; j < Math.abs(data[i][1]); j++) {
      nextCoords[i % 2] += direction;
      // if the size of the set does not change the point has been visited
      if (
        coords.size === coords.add(`${nextCoords[0]},${nextCoords[1]}`).size
      ) {
        return Math.abs(nextCoords[0]) + Math.abs(nextCoords[1]);
      }
    }
  }

  return Math.abs(nextCoords[0]) + Math.abs(nextCoords[1]);
};

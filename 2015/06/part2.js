module.exports = (input) => {
  // parse input data
  input = input.map(s => s.split(/(.+?)\s(\d+),(\d+).+?(\d+),(\d+)/).slice(1, -1));

  var lights = {};
  for (let i = 0; i < input.length; i++) {
    for (let x = +input[i][1]; x <= +input[i][3]; x++) {
      for (let y = +input[i][2]; y <= +input[i][4]; y++) {
        if (lights[`${x},${y}`] === undefined) lights[`${x},${y}`] = 0;
        if (input[i][0] === 'toggle') {
          lights[`${x},${y}`] += 2;
        } else if (input[i][0] === 'turn on') {
          lights[`${x},${y}`] += 1;
        } else if (input[i][0] === 'turn off') {
          lights[`${x},${y}`] -= 1;
          if (lights[`${x},${y}`] < 0) lights[`${x},${y}`] = 0;
        }
      }
    }
  }

  return Object.keys(lights).reduce((a, b) => a + lights[b], 0);
};
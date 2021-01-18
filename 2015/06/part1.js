module.exports = (input) => {
  // parse input data
  input = input.map((s) =>
    s.split(/(.+?)\s(\d+),(\d+).+?(\d+),(\d+)/).slice(1, -1)
  );

  var lights = {};
  for (let i = 0; i < input.length; i++) {
    for (let x = +input[i][1]; x <= +input[i][3]; x++) {
      for (let y = +input[i][2]; y <= +input[i][4]; y++) {
        if (input[i][0] === "toggle") {
          lights[`${x},${y}`] = +!lights[`${x},${y}`];
        } else {
          lights[`${x},${y}`] = +(input[i][0] === "turn on");
        }
      }
    }
  }

  return Object.keys(lights).reduce((a, b) => a + lights[b], 0);
};

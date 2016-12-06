module.exports = (input) => {
  input = [input[0]];
  // parse input data
  input = input.map(s => {
    let a = s.split(/\D+/).slice(1, -1).map(n => parseInt(n));
    if (s.startsWith('turn on')) return a.concat(1);
    else if (s.startsWith('turn off')) return a.concat(0);
    return a.concat(-1);
  });

  var lights = {};
  for (let i = 0; i < input.length; i++) {
    for (let y = input[i][1]; y <= input[i][3]; y++) {
      for (let x = input[i][0]; x <= input[i][2]; x++) {
        if (lights[`${x},${y}`] === undefined) lights[`${x},${y}`] = false;
        lights[`${x},${y}`] = !lights[`${x},${y}`];
        if (input[i][4] !== -1) lights[`${x},${y}`] = Boolean(input[i][4]);
      }
    }
  }

  console.log(Object.keys(lights).length);
  console.log(Object.keys(lights).filter(k => lights[k] === true).length);
};
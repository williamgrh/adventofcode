module.exports = (input) => {
  // parse input data
  var data = input.map((s) => s.split(""));

  // model of the keypad
  var keypad = [
    [null, null, 1, null, null],
    [null, 2, 3, 4, null],
    [5, 6, 7, 8, 9],
    [null, "A", "B", "C", null],
    [null, null, "D", null, null],
  ];

  // initialize solution string and starting button location
  var solution = "";
  var i = 2;
  var j = 0;

  // follow instructions from input data and form solution
  for (let x = 0; x < data.length; x++) {
    for (let y = 0; y < data[x].length; y++) {
      let ii = i;
      let jj = j;
      switch (data[x][y]) {
        case "U":
          ii--;
          break;
        case "D":
          ii++;
          break;
        case "L":
          jj--;
          break;
        case "R":
          jj++;
          break;
        default:
          break;
      }

      // check that the new button is within the keypad
      if (ii < 0 || ii > 4 || jj < 0 || jj > 4) {
        continue;
      }

      // check the new button exists
      if (keypad[ii][jj] !== null) {
        i = ii;
        j = jj;
      }
    }
    solution += keypad[i][j].toString();
  }

  return solution;
};

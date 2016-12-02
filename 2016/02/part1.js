module.exports = (input) => {
  // parse input data
  var data = input.map(s => s.split(''));

  // initialize solution string and starting button
  var solution = '';
  var button = 5;

  // follow instructions from input data and form solution
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      switch (data[i][j]) {
        case 'U':
          if (button > 3) {
            button -= 3;
          }
          break;
        case 'D':
          if (button < 7) {
            button += 3;
          }
          break;
        case 'L':
          if (button % 3 !== 1) {
            button -= 1;
          }
          break;
        case 'R':
          if (button % 3 !== 0) {
            button += 1;
          }
          break;
        default:
          break;
      }
    }
    solution += button.toString();
  }

  return solution;
}
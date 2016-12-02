module.exports = (input) => {
  // parse the input data
  var data = input.split(', ').map((s) => {
    // convert R and L turns to positive and negative
    if (s[0] === 'R') {
      return [1, parseInt(s.slice(1))];
    } else {
      return [-1, parseInt(s.slice(1))];
    }
  });

  // initial position and direction
  var coords = [0, 0]
  var direction = 1;

  // loop through instructions and modify coordinates
  for (let i = 0; i < data.length; i++) {
    // use alternation to decide direction and coordinate to modify
    if (i % 2 === 0) {
      direction = (direction === data[i][0]) ? 1 : -1;
    } else {
      direction = (direction !== data[i][0]) ? 1 : -1;
    }
    
    coords[i % 2] += data[i][1] * direction;
  }

  return Math.abs(coords[0]) + Math.abs(coords[1]);
}

/*

increment y
1) -----> L = + - => +
2) -----> R = + + => -
3) <----- L = - - => -
4) <----- R = - + => +

increment x
5) ^^^^^^ L = + - => -
6) ^^^^^^ R = + + => +
7) vvvvvv L = - - => +
8) vvvvvv R = - + => -



*/
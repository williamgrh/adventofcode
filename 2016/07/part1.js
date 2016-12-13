module.exports = (input) => {
  console.log(input[34]);
	input = input.map(s => s.trim().split(/\[|\]/));
  var count = 0;
  for (let i = 0; i < input.length; i++) {
    let abba = false;
    let bracket = false;
    for (let j = 0; j < input[i].length; j++) {
      let match = (input[i][j].match(/(?!(.)\1)([a-z])([a-z])\3\2/g) || []);
      if (match.length !== 0) {
        if (j % 2 === 1) {
          bracket = true;
          break;
        }
        abba = true;
      } 
    }

    if (abba && !bracket) {
      count++;
    }
  }

  return count;
};
const _ = require('lodash');
const knotHash = require('../10/part2');
module.exports = (input) => {
  let usedSquares = 0;
  for (let i = 0; i < 128; i++) {
    knotHash(input + '-' + i.toString()).split('').map(h => usedSquares += _.countBy(parseInt(h, 16).toString(2))['1'] || 0);
  }
  return usedSquares;
};
const _ = require('lodash');
module.exports = (input) => {
  // get array of chars for each column
  input = _.unzip(input.map(s => s.trim().split('')));
  // find most common letter in each column
  input = input.map(a => _.maxBy(a, b => a.join('').split(b).length));
  return input.join('');
};
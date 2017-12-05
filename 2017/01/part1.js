const _ = require('lodash');
module.exports = (input) => {
  let sum = _.reduce(input.split(''), (sum, n, i) => {
    let j = i === input.length - 1 ? 0 : i + 1;
    if (n === input[j]) {
      return sum + parseInt(n);
    }
    return sum;
  }, 0);
  return sum;
};
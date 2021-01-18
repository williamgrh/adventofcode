const _ = require("lodash");
module.exports = (input) =>
  input.reduce((sum, line) => {
    line = (line.match(/\S+/g) || []).map((n) => parseInt(n, 10));
    return sum + _.max(line) - _.min(line);
  }, 0);

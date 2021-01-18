const _ = require("lodash");
module.exports = (input) =>
  input.reduce((count, passphrase) => {
    let words = passphrase
      .split(" ")
      .map((word) => word.split("").sort().join(""));
    if (_.uniq(words).length === words.length) count++;
    return count;
  }, 0);

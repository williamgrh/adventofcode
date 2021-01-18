const md5 = require("md5");
module.exports = (input) => {
  var index = 0;
  var hash = md5(`${input}${index}`);
  while (!hash.startsWith("00000")) {
    index++;
    hash = md5(`${input}${index}`);
  }
  return index;
};

const md5 = require("md5");
module.exports = (input) => {
  var password = "";
  var index = 0;
  while (password.length < 8) {
    let hash = md5(`${input}${index}`);
    if (hash.startsWith("00000")) {
      password = password.concat(hash[5]);
    }
    index++;
  }
  return password;
};

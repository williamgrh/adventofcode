const md5 = require('md5');
module.exports = (input) => {
  var password = new Array(7);
  password.fill(null)
  var index = 0;
  while (password.indexOf(null) !== -1) {
    var hash = md5(`${input}${index}`);
    if (hash.startsWith('00000') && !isNaN(hash[5])) {
      let i = parseInt(hash[5]);
      if (i < 8 && !password[i]) {
        password[i] = hash[6];
      }
    }
    index++;
  }
  return password.join().replace(/,/g, '');
};
const fs = require("fs");
const path = require("path");

module.exports = (input) => {
  var password = new Array(7);
  password.fill(null);

  const hashes = fs
    .readFileSync(path.resolve(__dirname, `zero-hashes-${input}.txt`), "utf-8")
    .split("\n");

  hashes.forEach((line) => {
    const [index, hash] = line.split(" ");
    if (!isNaN(hash[5])) {
      let i = parseInt(hash[5]);
      if (i < 8 && !password[i]) {
        password[i] = hash[6];
      }
    }
  });
  return password.join("");
};

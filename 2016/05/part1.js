const fs = require("fs");
const path = require("path");

module.exports = (input) => {
  var password = "";
  const hashes = fs
    .readFileSync(path.resolve(__dirname, `zero-hashes-${input}.txt`), "utf-8")
    .split("\n");

  while (password.length < 8) {
    hashes.forEach((line) => {
      const [index, hash] = line.split(" ");
      password = password.concat(hash[5]);
    });
  }
  return password;
};

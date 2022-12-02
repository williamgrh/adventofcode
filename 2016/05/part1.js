const fs = require("fs");
const path = require("path");

module.exports = (input) => {
  var password = "";
  const hashes = fs
    .readFileSync(path.resolve(__dirname, `zero-hashes-${input}.txt`), "utf-8")
    .split("\n");

  for (let i = 0; i < hashes.length; i++) {
    const [_, hash] = hashes[i].split(" ");
    password = password.concat(hash[5]);
    if (password.length === 8) {
      return password;
    }
  }
};

module.exports = (input) => {
  const part1 = require("./part1");
  let cache = [],
    programs = "abcdefghijklmnop";
  do {
    cache.push(programs);
    programs = part1(input, programs);
  } while (!cache.includes(programs));
  return cache[1e9 % cache.length];
};

const _ = require("lodash");
module.exports = (input) => {
  let cache = [],
    n = 0;
  let banks = input.split(/\s+/).map((n) => parseInt(n, 10));

  while (!_.includes(cache, banks.join(","))) {
    cache.push(banks.join(","));

    // Perform reallocation
    let b = Math.max.apply(null, banks);
    let i = banks.indexOf(b);
    banks[i] = 0;
    while (b > 0) {
      i = (i + 1) % banks.length;
      banks[i] += 1;
      b -= 1;
    }

    n += 1;
  }

  return n;
};

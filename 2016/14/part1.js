const md5 = require('md5');
const _ = require('lodash');

module.exports = (input) => {
  let validHashes = [];
  let todoHashes = [];

  for (let i = 0; validHashes.length < 64; i++) {
    let hash = md5(input + i);
    let triplet = hash.match(/(.)\1{2}/);

    _.remove(todoHashes, todo => {
      if (todo.i + 1000 < i) {
        return true;
      }

      if (hash.includes(Array(6).join(todo.c))) {
        validHashes.push(todo.i);
        return true;
      }

      return false;
    });

    if (triplet) {
      todoHashes.push({i: i, c: triplet[1]});
    }
  }

  return _.sortBy(validHashes)[63];
};

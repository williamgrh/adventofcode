const md5 = require('md5');
const _ = require('lodash');
const fs = require('fs')
const cache = fs.existsSync('./2016/14/cache.json') ? require('./cache.json') : []

module.exports = (input) => {
  let validHashes = _.clone(cache);
  let todoHashes = [];

  for (let i = 0; validHashes.length < 64; i++) {
    let hash = md5(input + i);
    for (let i = 0; i < 2016; i++) {
      hash = md5(hash);
    }
    let triplet = hash.match(/(.)\1{2}/);

    _.remove(todoHashes, todo => {
      if (todo.i + 1000 < i) {
        return true;
      }

      if (hash.includes(Array(6).join(todo.c))) {
        validHashes.push(todo.i);
        fs.writeFileSync('./2016/14/cache.json', JSON.stringify(validHashes))
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

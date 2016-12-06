process.env.NODE_ENV = 'test';

const assert = require('assert');
const run = require('./run');

describe('Advent of Code', () => {
  function test(year, day, part, expected) {
    const actual = run(year, day, part);
    return assert.equal(expected, actual);
  }

  if (process.argv.length === 6) {
    let year = process.argv[5].toString();
    year = year.length === 2 ? '20'.concat(year) : year;
    require(`./${year}/test`)(test);
  } else {
    for (let year = 2015; year <= 2016; year++) {
      require(`./${year}/test`)(test);
    }
  }
});
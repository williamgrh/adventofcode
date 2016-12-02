const assert = require('assert');

describe('advent of code', () => {
  const run = require('../run');

  function test(day, part, expected) {
    const actual = run(2016, day, part);
    return assert.equal(expected, actual);
  }

  it('day 01, part 1', () => test(01, 1, 146));
  it('day 01, part 2', () => test(01, 2, 131));

  it('day 02, part 1', () => test(02, 1, '78985'));
  it('day 02, part 2', () => test(02, 2, '57DD8'));
})
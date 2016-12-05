const assert = require('assert');

describe('advent of code', () => {
  const run = require('../run');

  function test(day, part, expected) {
    const actual = run(2016, day, part);
    return assert.equal(expected, actual);
  }

  it('day 1, part 1', () => test(1, 1, 146));
  it('day 1, part 2', () => test(1, 2, 131));

  it('day 2, part 1', () => test(2, 1, '78985'));
  it('day 2, part 2', () => test(2, 2, '57DD8'));

  it('day 3, part 1', () => test(3, 1, 862));
  it('day 3, part 2', () => test(3, 2, 1577));

  it('day 4, part 1', () => test(4, 1, 185371));
  it('day 4, part 1', () => test(4, 2, 984));
})
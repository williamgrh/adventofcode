const assert = require('assert');

describe('advent of code', () => {
  const run = require('../run');

  function test(day, part, expected) {
    const actual = run(2015, day, part);
    return assert.equal(expected, actual);
  }

  it('day 1, part 1', () => test(1, 1, 280));
  it('day 1, part 2', () => test(1, 2, 1797));

  it('day 2, part 1', () => test(2, 1, 1598415));
  it('day 2, part 2', () => test(2, 2, 3812909));

  it('day 3, part 1', () => test(3, 1, 2565));
  it('day 3, part 2', () => test(3, 2, 2639));
})
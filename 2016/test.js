module.exports = (test) => {
  describe('2016', () => {
    it('day 01, part 1', () => test(16, 1, 1, 146));
    it('day 01, part 2', () => test(16, 1, 2, 131));

    it('day 02, part 1', () => test(16, 2, 1, '78985'));
    it('day 02, part 2', () => test(16, 2, 2, '57DD8'));

    it('day 03, part 1', () => test(16, 3, 1, 862));
    it('day 03, part 2', () => test(16, 3, 2, 1577));

    it('day 04, part 1', () => test(16, 4, 1, 185371));
    it('day 04, part 1', () => test(16, 4, 2, 984));

    it('day 05, part 1', () => test(16, 5, 1, '801b56a7'));
    it('day 05, part 1', () => test(16, 5, 2, '424a0197'));

    it('day 06, part 1', () => test(16, 6, 1, 'mshjnduc'));
    it('day 06, part 1', () => test(16, 6, 2, 'apfeeebz'));

    it('day 07, part 1', () => test(16, 07, 1, 105));
    it('day 07, part 2', () => test(16, 07, 2, 258));
  });
};
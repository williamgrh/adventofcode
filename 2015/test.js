module.exports = (test) => {
  describe('2015', () => {
    it('day 01, part 1', () => test(15, 1, 1, 280));
    it('day 01, part 2', () => test(15, 1, 2, 1797));

    it('day 02, part 1', () => test(15, 2, 1, 1598415));
    it('day 02, part 2', () => test(15, 2, 2, 3812909));

    it('day 03, part 1', () => test(15, 3, 1, 2565));
    it('day 03, part 2', () => test(15, 3, 2, 2639));

    it('day 04, part 1', () => test(15, 4, 1, 254575));
    it('day 04, part 2', () => test(15, 4, 2, 1038736));

    it('day 05, part 1', () => test(15, 5, 1, 236));
    it('day 05, part 2', () => test(15, 5, 2, 51));

    it('day 06, part 1', () => test(15, 6, 1, 377891));
    it('day 06, part 2', () => test(15, 6, 2, 14110788));
  });
};
module.exports = (test) => {
  describe('2017', () => {
    it('day 01, part 1', () => test(17, 01, 1, 1390));
    it('day 01, part 2', () => test(17, 01, 2, 1232));

    it('day 02, part 1', () => test(17, 02, 1, 42299));
    it('day 02, part 2', () => test(17, 02, 2, 277));

    it('day 03, part 1', () => test(17, 03, 1, 475));
    it('day 03, part 2', () => test(17, 03, 2, 279138));

    it('day 04, part 1', () => test(17, 04, 1, 451));
    it('day 04, part 2', () => test(17, 04, 2, 223));
  });
};
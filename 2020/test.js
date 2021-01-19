module.exports = (test) => {
  describe("2020", () => {
    it("day 01, part 1", () => test(20, 01, 1, 928896));
    it("day 01, part 2", () => test(20, 01, 2, 295668576));

    it("day 02, part 1", () => test(20, 02, 1, 603));
    it("day 02, part 2", () => test(20, 02, 2, 404));

    it("day 03, part 1", () => test(20, 03, 1, 184));
    it("day 03, part 2", () => test(20, 03, 2, 2431272960));
  });
};

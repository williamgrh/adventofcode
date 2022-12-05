module.exports = (test) => {
  describe("2022", () => {
    it("day 01, part 1", () => test(22, 01, 1, 68442));
    it("day 01, part 2", () => test(22, 01, 2, 204837));

    it("day 02, part 1", () => test(22, 02, 1, 9759));
    it("day 02, part 2", () => test(22, 02, 2, 12429));

    it("day 03, part 1", () => test(22, 03, 1, 8176));
    it("day 03, part 2", () => test(22, 03, 2, 2689));

    it("day 04, part 1", () => test(22, 04, 1, 441));
    it("day 04, part 2", () => test(22, 04, 2, 861));

    it("day 05, part 1", () => test(22, 05, 1, "TBVFVDZPN"));
    it("day 05, part 2", () => test(22, 05, 2, "VLCWHTDSZ"));
  });
};

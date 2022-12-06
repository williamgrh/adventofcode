module.exports = (input) => {
  for (let i = 0; i < input.length; i++) {
    const characterSet = new Set(input.slice(i, i + 14));
    if (characterSet.size === 14) {
      return i + 14;
    }
  }
};

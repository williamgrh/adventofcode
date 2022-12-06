module.exports = (input) => {
  for (let i = 0; i < input.length; i++) {
    const characterSet = new Set(input.slice(i, i + 4));
    if (characterSet.size === 4) {
      return i + 4;
    }
  }
};

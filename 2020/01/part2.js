module.exports = (input) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      const a = input[i];
      const b = input[j];
      if (a === b || parseInt(a) + parseInt(b) > 2020) {
        continue;
      }

      const c = (2020 - parseInt(a) - parseInt(b)).toString();

      if (input.indexOf(c) > -1) {
        return a * b * c;
      }
    }
  }

  return -1;
};

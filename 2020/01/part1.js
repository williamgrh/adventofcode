module.exports = (input) => {
  for (let i = 0; i < input.length; i++) {
    const a = input[i];
    const b = (2020 - parseInt(a)).toString();

    if (input.indexOf(b) > -1) {
      return a * b;
    }
  }

  return -1;
};

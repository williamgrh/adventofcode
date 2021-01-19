module.exports = (input) => {
  return input.reduce((acc, i) => {
    const min = parseInt(i.match(/^(\d+)/)[1]);
    const max = parseInt(i.match(/-(\d+) /)[1]);
    const letter = i.match(/([a-z]):/)[1];
    const password = i.match(/: ([a-z]+)$/)[1];

    const count = (password.match(new RegExp(letter, "g")) || []).length;

    if (count >= min && count <= max) {
      return acc + 1;
    }

    return acc;
  }, 0);
};

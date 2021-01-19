module.exports = (input) => {
  return input.reduce((acc, i) => {
    let pos1 = parseInt(i.match(/^(\d+)/)[1]) - 1;
    let pos2 = parseInt(i.match(/-(\d+) /)[1]) - 1;
    const letter = i.match(/([a-z]):/)[1];
    const password = i.match(/: ([a-z]+)$/)[1];

    if (password[pos1] === letter ^ password[pos2] === letter) {
      return acc + 1;
    }

    return acc;
  }, 0);
};

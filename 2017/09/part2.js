module.exports = (input) =>
  input
    .replace(/!./g, "")
    .match(/<.*?>/g)
    .reduce((length, g) => length + g.length - 2, 0);

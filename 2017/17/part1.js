module.exports = (input) => {
  input = parseInt(input, 10);
  let buffer = [0], c = 0;
  for (let i = 1; i < 2018; i++) {
    c = ((c + input) % buffer.length) + 1;
    buffer.splice(c, 0, i);
  }
  return buffer[buffer.indexOf(2017) + 1];
};
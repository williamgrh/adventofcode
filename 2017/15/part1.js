module.exports = (input) => {
  let a = parseInt(input[0].split(' ')[4], 10),
      b = parseInt(input[1].split(' ')[4], 10),
      count = 0;
  for (let i = 0; i < 4E7; i++) {
    a = (a * 16807) % 2147483647;
    b = (b * 48271) % 2147483647;
    if ((a & 0xFFFF) === (b & 0xFFFF)) count++;
  }
  return count;
};
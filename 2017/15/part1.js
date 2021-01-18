module.exports = (input) => {
  let a = parseInt(input[0].split(" ")[4], 10),
    b = parseInt(input[1].split(" ")[4], 10),
    count = 0;
  for (let i = 0; i < 4e7; i++) {
    a = (a * 16807) % 2147483647;
    b = (b * 48271) % 2147483647;
    if ((a & 0xffff) === (b & 0xffff)) count++;
  }
  return count;
};

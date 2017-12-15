module.exports = (input) => {
  let a = parseInt(input[0].split(' ')[4], 10),
      b = parseInt(input[1].split(' ')[4], 10),
      count = 0;
  for (let i = 0; i < 5E6; i++) {
    do a = (a * 16807) % 2147483647;
    while (a % 4 !== 0);
    do b = (b * 48271) % 2147483647;
    while (b % 8 !== 0);
    if ((a & 0xFFFF) === (b & 0xFFFF)) count++;
  }
  return count;
};
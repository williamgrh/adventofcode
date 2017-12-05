module.exports = (input) => input.reduce((sum, line) => {
  line = (line.match(/\S+/g) || []).map(n => parseInt(n, 10)).sort((a, b) => a - b);
  let n, d = 1;
  do n = line.pop();
  while (!(d = line.find(c => n % c === 0)));
  return sum + (n / d);
}, 0);
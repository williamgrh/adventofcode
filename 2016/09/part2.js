function decompress(str, n) {
  let left = str.indexOf('(');
  let right = str.indexOf(')');
  if (left >= 0 && right >= 0) {
    let [x, y] = str.slice(left + 1, right).split('x').map(n => +n);
    let a = str.slice(0, left);
    let b = str.slice(right + 1, right + 1 + x);
    let c = str.slice(right + 1 + x);
    return (a.length + (decompress(b, y)) + (c.length ? decompress(c, 1) : 0)) * n;
  }
  return str.length * n;
}

module.exports = (input) => {
  return decompress(input, 1);
};
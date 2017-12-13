module.exports = (input) => {
  input = input.split(',').map(n => parseInt(n, 10));
  let c = 0, s = 0, l = 256, list = Array.apply(null, Array(l)).map((v, i) => i);

  const circularReverseInPlace = (index, length) => {
    let sub = [];
    for (let i = 0; i < length; i++) {
      sub.push(list[(index + i) % l]);
    }
    sub = sub.reverse();
    for (let i = 0; i < length; i++) {
      list[(index + i) % l] = sub[i];
    }
  }

  input.map(length => {
    if (length > l) return;
    circularReverseInPlace(c, length);
    c = (c + length + s) % l; s++;
  });

  return list[0] * list[1];
};
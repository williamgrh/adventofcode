module.exports = (input) => {
  input = input
    .split("")
    .map((b) => b.charCodeAt(0))
    .concat([17, 31, 73, 47, 23]);
  let c = 0,
    s = 0,
    l = 256,
    list = Array.apply(null, Array(l)).map((v, i) => i);

  const circularReverseInPlace = (index, length) => {
    let sub = [];
    for (let i = 0; i < length; i++) {
      sub.push(list[(index + i) % l]);
    }
    sub = sub.reverse();
    for (let i = 0; i < length; i++) {
      list[(index + i) % l] = sub[i];
    }
  };

  for (let i = 0; i < 64; i++) {
    input.map((length) => {
      if (length > l) return;
      circularReverseInPlace(c, length);
      c = (c + length + s) % l;
      s++;
    });
  }

  let output = "";
  for (let i = 0; i < 16; i++) {
    let block = list.slice(i * 16, i * 16 + 16);
    let char = block.reduce((a, v) => a ^ v, 0);
    output += char.toString(16).padStart(2, "0");
  }

  return output;
};

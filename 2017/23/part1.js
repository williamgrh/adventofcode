module.exports = (input) => {
  input = input.map(l => l.split(' '));
  let r = 'abcdefgh'.split('').reduce((r, i) => {r[i] = 0; return r}, {});
  let i = 0, mulCount = 0;

  while (i < input.length) {
    let ins = input[i];
    let x = parseInt(ins[1]) || r[ins[1]];
    let y = parseInt(ins[2]) || r[ins[2]];

    if (ins[0] === 'set') {
      r[ins[1]] = y;
    } else if (ins[0] === 'sub') {
      r[ins[1]] -= y;
    } else if (ins[0] === 'mul') {
      r[ins[1]] *= y;
      mulCount++;
    } else if (ins[0] === 'jnz' && x !== 0) {
      i += y - 1;
    }

    i++;
  }

  return mulCount;
};
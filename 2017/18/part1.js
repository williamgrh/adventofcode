module.exports = (input) => {
  let registers = {}, i = 0, y, s;
  input = input.map(i => {
    i = i.split(' ');
    if (i[1].match(/[a-z]/)) registers[i[1]] = 0;
    if (i.length > 2 && i[2].match(/[a-z]/)) registers[i[2]] = 0;
    return i;
  });

  while (i < input.length) {
    let inst = input[i]
    y = parseInt(inst[2], 10) || registers[inst[2]], i++;
    if (inst[0] === 'snd') s = parseInt(inst[1], 10) || registers[inst[1]];
    if (inst[0] === 'set') registers[inst[1]] = y;
    if (inst[0] === 'add') registers[inst[1]] += y;
    if (inst[0] === 'mul') registers[inst[1]] *= y;
    if (inst[0] === 'mod') registers[inst[1]] %= y;
    if (inst[0] === 'rcv') if (parseInt(inst[1], 10) !== 0 || registers[inst[1]] !== 0) return s;
    if (inst[0] === 'jgz') if (parseInt(inst[1], 10) > 0 || registers[inst[1]] > 0) i = i - 1 + y;
  }
};
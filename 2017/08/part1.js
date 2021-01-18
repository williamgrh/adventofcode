module.exports = (input) => {
  const compare = {
    ">": (x, y) => x > y,
    "<": (x, y) => x < y,
    ">=": (x, y) => x >= y,
    "<=": (x, y) => x <= y,
    "==": (x, y) => x == y,
    "!=": (x, y) => x != y,
  };
  const modify = {
    inc: (x, n) => x + n,
    dec: (x, n) => x - n,
  };

  let registers = {};
  input.map((command) => {
    command = command.split(" ");
    registers[command[0]] = registers[command[0]] || 0;
    registers[command[4]] = registers[command[4]] || 0;
    if (compare[command[5]](registers[command[4]], parseInt(command[6], 10))) {
      registers[command[0]] = modify[command[1]](
        registers[command[0]],
        parseInt(command[2], 10)
      );
    }
  });

  return Math.max.apply(null, Object.values(registers));
};

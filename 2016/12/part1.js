module.exports = (input) => {
  let registers = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
  };

  let i = 0;
  while (i < input.length) {
    let instruction = input[i].split(" ");
    let x = parseInt(instruction[1], 10) || instruction[1];
    let y;
    if (instruction.length > 2) {
      y = parseInt(instruction[2], 10) || instruction[2];
      x = typeof x === "string" ? registers[x] : x;
    }

    switch (instruction[0]) {
      case "cpy":
        registers[y] = x;
        break;
      case "inc":
        registers[x]++;
        break;
      case "dec":
        registers[x]--;
        break;
      case "jnz":
        if (x !== 0) {
          i += y;
          continue;
        }
        break;
      default:
        return 0;
    }

    i++;
  }

  return registers["a"];
};

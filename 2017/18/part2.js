module.exports = (input) => {
  let A = { pos: 0, r: {}, s: [], numSent: 0 },
    B = { pos: 0, r: {}, s: [], numSent: 0 };

  input = input.map((i) => {
    i = i.split(" ");
    if (i[1].match(/[a-z]/)) (A.r[i[1]] = 0), (B.r[i[1]] = 0);
    if (i.length > 2 && i[2].match(/[a-z]/)) (A.r[i[2]] = 0), (B.r[i[2]] = 0);
    return i;
  });

  (A.r["p"] = 0), (B.r["p"] = 1);

  const execute = (p1, p2) => {
    // p1 is calling program, p2 is other program
    let inst = input[p1.pos];
    let y = parseInt(inst[2], 10) || p1.r[inst[2]];
    if (inst[0] === "set") p1.r[inst[1]] = y;
    if (inst[0] === "add") p1.r[inst[1]] += y;
    if (inst[0] === "mul") p1.r[inst[1]] *= y;
    if (inst[0] === "mod") p1.r[inst[1]] %= y;
    if (inst[0] === "jgz" && (parseInt(inst[1], 10) > 0 || p1.r[inst[1]] > 0))
      p1.pos = p1.pos - 1 + y;
    if (inst[0] === "snd")
      p1.numSent++, p1.s.push(parseInt(inst[1], 10) || p1.r[inst[1]]);
    if (inst[0] === "rcv") {
      if (p2.s.length > 0) p1.r[inst[1]] = p2.s.shift();
      else p1.pos--;
    }
    p1.pos++;
  };

  while (
    !(
      input[A.pos][0] === "rcv" &&
      B.s.length === 0 &&
      input[B.pos][0] === "rcv" &&
      A.s.length === 0
    )
  ) {
    if (A.pos < input.length) execute(A, B);
    if (B.pos < input.length) execute(B, A);
  }

  return B.numSent;
};

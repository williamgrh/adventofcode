module.exports = (input) => {
  // parse monkeys
  const monkeys = [];
  let currentMonkey = {};
  input.forEach((line) => {
    if (line.indexOf("Monkey") === 0) {
      currentMonkey = { id: Number(line.match(/\d+/)[0]), inspections: 0 };
    } else if (line.indexOf("Starting items") === 2) {
      currentMonkey.items = line.split(/: |, /g).slice(1).map(Number);
    } else if (line.indexOf("Operation") === 2) {
      currentMonkey.operation = line
        .match(/(old|\d+) (\+|\*) (old|\d+)/)
        .slice(1, 4);
    } else if (line.indexOf("Test") === 2) {
      currentMonkey.test = Number(line.match(/\d+/)[0]);
    } else if (line.indexOf("If true") === 4) {
      currentMonkey.ifTrue = Number(line.match(/\d+/)[0]);
    } else if (line.indexOf("If false") === 4) {
      currentMonkey.ifFalse = Number(line.match(/\d+/)[0]);
      monkeys.push(currentMonkey);
    }
  });

  // simulate rounds
  for (let i = 0; i < 20; i++) {
    monkeys.forEach((monkey) => {
      monkey.items.forEach((item) => {
        const magnitude =
          monkey.operation[2] === "old" ? item : Number(monkey.operation[2]);
        const worryLevel = Math.floor(
          (monkey.operation[1] === "+" ? item + magnitude : item * magnitude) /
            3
        );
        if (worryLevel % monkey.test === 0) {
          monkeys[monkey.ifTrue].items.push(worryLevel);
        } else {
          monkeys[monkey.ifFalse].items.push(worryLevel);
        }

        monkey.inspections += 1;
      });

      monkey.items = [];
    });
  }

  monkeys.sort((a, b) => b.inspections - a.inspections);

  return monkeys[0].inspections * monkeys[1].inspections;
};

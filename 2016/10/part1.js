function transferChip(destination, id, value) {
  if (!destination[id]) {
    destination[id] = [];
  }
  destination[id].push(value);
  return destination;
}

module.exports = (input) => {
  let bots = {};
  let output = {};
  let instructions = {}; // bot #: {destination, number}

  let lastBot;
  let nextbot;

  // Give bots their starting chips and parse instructions
  input.forEach((instruction) => {
    instruction = instruction.split(" ");
    if (instruction[0] === "value") {
      if (!bots[instruction[5]]) {
        bots[instruction[5]] = [];
      } else {
        nextBot = instruction[5];
      }
      bots[instruction[5]].push(parseInt(instruction[1], 10));
    } else {
      instructions[instruction[1]] = {
        low: [instruction[5], instruction[6]],
        high: [instruction[10], instruction[11]],
      };
    }
  });

  let compared61 = [];
  let compared17 = [];

  while (nextBot !== lastBot) {
    lastBot = nextBot;
    let i = instructions[nextBot];
    let low = Math.min.apply(null, bots[nextBot]);
    let high = Math.max.apply(null, bots[nextBot]);
    bots[nextBot] = [];

    if (low === 17 || high === 17) {
      compared17.push(nextBot);
    }

    if (low === 61 || high === 61) {
      compared61.push(nextBot);
    }

    // transfer low
    if (i.low[0] === "bot") {
      bots = transferChip(bots, i.low[1], low);
    } else {
      output = transferChip(output, i.low[1], low);
    }

    // transfer high
    if (i.high[0] === "bot") {
      bots = transferChip(bots, i.high[1], high);
    } else {
      output = transferChip(output, i.high[1], high);
    }

    // find next bot
    for (const [key, value] of Object.entries(bots)) {
      if (value.length > 1) {
        nextBot = key;
      }
    }
  }

  for (let i = 0; i < compared17.length; i++) {
    if (compared61.indexOf(compared17[i]) >= 0) {
      return compared17[i];
    }
  }

  return nextBot;
};

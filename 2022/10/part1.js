module.exports = (input) => {
  const incrementCurrentInstruction = (index, cycleStarted) => {
    return {
      index,
      cycleStarted,
      instruction: input[index].split(" ")[0],
      magnitude: Number(input[index].split(" ")[1]),
    };
  };

  let sumSignalStrength = 0;
  let x = 1;
  let currentInstruction = incrementCurrentInstruction(0, 1);

  for (let currentCycle = 1; currentCycle <= 220; currentCycle++) {
    // before cycle
    if (!currentInstruction.instruction) {
      currentInstruction = incrementCurrentInstruction(
        currentInstruction.index + 1,
        currentCycle
      );
    }

    // during cycle
    if (currentCycle % 40 === 20) {
      sumSignalStrength += currentCycle * x;
    }

    // after cycle
    if (
      currentInstruction.instruction === "noop" &&
      currentCycle - currentInstruction.cycleStarted === 0
    ) {
      currentInstruction.instruction = null;
    } else if (
      currentInstruction.instruction === "addx" &&
      currentCycle - currentInstruction.cycleStarted === 1
    ) {
      x += currentInstruction.magnitude;
      currentInstruction.instruction = null;
      currentInstruction.magnitude = null;
    }
  }

  return sumSignalStrength;
};

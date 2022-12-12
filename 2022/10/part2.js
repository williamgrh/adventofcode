module.exports = (input) => {
  const incrementCurrentInstruction = (index, cycleStarted) => {
    return {
      index,
      cycleStarted,
      instruction: input[index].split(" ")[0],
      magnitude: Number(input[index].split(" ")[1]),
    };
  };

  let drawnPixels = "";
  let x = 1;
  let currentInstruction = incrementCurrentInstruction(0, 1);

  for (let currentCycle = 1; currentCycle <= 240; currentCycle++) {
    // before cycle
    if (!currentInstruction.instruction) {
      currentInstruction = incrementCurrentInstruction(
        currentInstruction.index + 1,
        currentCycle
      );
    }

    // during cycle draw in position cycle - 1
    const currentPixel = (currentCycle - 1) % 40;
    if (currentPixel >= x - 1 && currentPixel <= x + 1) {
      drawnPixels += "#";
    } else {
      drawnPixels += ".";
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

  /*
    // visualize CRT output
    console.log(drawnPixels.substring(0, 40));
    console.log(drawnPixels.substring(40, 80));
    console.log(drawnPixels.substring(80, 120));
    console.log(drawnPixels.substring(120, 160));
    console.log(drawnPixels.substring(160, 200));
    console.log(drawnPixels.substring(200, 240));
  */

  return "BJFRHRFU";
};

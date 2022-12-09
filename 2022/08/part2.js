module.exports = (input) => {
  let greatestScore = 0;

  for (let a = 1; a < input.length - 1; a++) {
    for (let b = 1; b < input.length - 1; b++) {
      const currentTree = input[a].charAt(b);
      let scenicScore = 1;
      let scoreMultiplier = 1;

      // look right
      for (let x = b + 1; x < input.length; x++) {
        if (x !== b + 1) scenicScore += scoreMultiplier;
        if (input[a].charAt(x) >= currentTree) {
          break;
        }
      }

      scoreMultiplier = scenicScore;

      // look left
      for (let x = b - 1; x >= 0; x--) {
        if (x !== b - 1) scenicScore += scoreMultiplier;
        if (input[a].charAt(x) >= currentTree) {
          break;
        }
      }

      scoreMultiplier = scenicScore;

      // look down
      for (let x = a + 1; x < input.length; x++) {
        if (x !== a + 1) scenicScore += scoreMultiplier;
        if (input[x].charAt(b) >= currentTree) {
          break;
        }
      }

      scoreMultiplier = scenicScore;

      // look up
      for (let x = a - 1; x >= 0; x--) {
        if (x !== a - 1) scenicScore += scoreMultiplier;
        if (input[x].charAt(b) >= currentTree) {
          break;
        }
      }

      if (scenicScore > greatestScore) greatestScore = scenicScore;
    }
  }

  return greatestScore;
};

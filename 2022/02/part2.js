module.exports = (input) => {
  const handScores = { A: 1, B: 2, C: 3 };
  const scores = { X: 0, Y: 3, Z: 6 };

  return input.reduce((score, round) => {
    const [opponent, outcome] = round.split(" ");
    score += scores[outcome];

    if (outcome === "X") {
      score += ((handScores[opponent] + 1) % 3) + 1;
    } else if (outcome === "Y") {
      score += handScores[opponent];
    } else if (outcome === "Z") {
      score += (handScores[opponent] % 3) + 1;
    }

    return score;
  }, 0);
};

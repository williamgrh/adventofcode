module.exports = (input) => {
  const scores = { X: 1, Y: 2, Z: 3, A: 1, B: 2, C: 3 };

  return input.reduce((score, round) => {
    const [opponent, player] = round.split(" ");
    score += scores[player];

    if (scores[opponent] === scores[player]) {
      score += 3;
    } else if ((scores[opponent] + 1) % 3 === scores[player] % 3) {
      score += 6;
    }

    return score;
  }, 0);
};

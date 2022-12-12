module.exports = (input) => {
  let headX = 0,
    headY = 0,
    tailX = 0,
    tailY = 0;
  const visitedPositions = new Set();
  visitedPositions.add(`${tailX},${tailY}`);

  input.forEach((vector) => {
    const [direction, magnitude] = vector.split(" ");
    for (let i = 0; i < magnitude; i++) {
      if (direction === "U") {
        headY++;
      } else if (direction === "D") {
        headY--;
      } else if (direction === "R") {
        headX++;
      } else if (direction === "L") {
        headX--;
      }

      if (headX - tailX > 1) {
        tailX++;
        tailY = headY;
      } else if (headY - tailY > 1) {
        tailY++;
        tailX = headX;
      } else if (tailX - headX > 1) {
        tailX--;
        tailY = headY;
      } else if (tailY - headY > 1) {
        tailY--;
        tailX = headX;
      }

      visitedPositions.add(`${tailX},${tailY}`);
    }
  });

  return visitedPositions.size;
};

module.exports = (input) => {
  const numKnots = 10;
  const rope = new Array(numKnots).fill().map(() => ({ x: 0, y: 0 }));

  const visitedPositions = new Set();
  visitedPositions.add(`${rope[numKnots - 1].x},${rope[numKnots - 1].y}`);

  input.forEach((vector) => {
    const [direction, magnitude] = vector.split(" ");
    for (let i = 0; i < magnitude; i++) {
      if (direction === "U") {
        rope[0].y++;
      } else if (direction === "D") {
        rope[0].y--;
      } else if (direction === "R") {
        rope[0].x++;
      } else if (direction === "L") {
        rope[0].x--;
      }

      for (let knot = 1; knot < numKnots; knot++) {
        if (
          Math.abs(rope[knot - 1].x - rope[knot].x) > 1 ||
          Math.abs(rope[knot - 1].y - rope[knot].y) > 1
        ) {
          if (rope[knot - 1].x !== rope[knot].x) {
            if (rope[knot - 1].x > rope[knot].x) {
              rope[knot].x++;
            } else {
              rope[knot].x--;
            }
          }

          if (rope[knot - 1].y !== rope[knot].y) {
            if (rope[knot - 1].y > rope[knot].y) {
              rope[knot].y++;
            } else {
              rope[knot].y--;
            }
          }
        }
      }

      visitedPositions.add(`${rope[numKnots - 1].x},${rope[numKnots - 1].y}`);
    }
  });

  return visitedPositions.size;
};

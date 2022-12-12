module.exports = (input) => {
  const n = input[0].length;

  const startIndex = input.join("").indexOf("S");
  let x = startIndex % n;
  let y = Math.floor(startIndex / n);

  const endIndex = input.join("").indexOf("E");
  const goal = `${endIndex % n},${Math.floor(endIndex / n)}`;

  const visited = new Set();
  let queue = [[[x, y], 0]];

  while (queue.length > 0) {
    const [node, steps] = queue.shift();
    if (visited.has(node.join(","))) {
      continue;
    }

    visited.add(node.join(","));
    if (node.join(",") === goal) {
      return steps;
    }

    const [x, y] = node;
    const neighbors = [];

    // look up
    if (y > 0) {
      neighbors.push([x, y - 1]);
    }

    // look down
    if (y < input.length - 1) {
      neighbors.push([x, y + 1]);
    }

    // look right
    if (x < input[0].length - 1) {
      neighbors.push([x + 1, y]);
    }

    // look left
    if (x > 0) {
      neighbors.push([x - 1, y]);
    }

    queue = queue.concat(
      neighbors
        .filter((neighbor) => {
          let currentElevation = input[node[1]].charCodeAt(node[0]);
          let neighborElevation = input[neighbor[1]].charCodeAt(neighbor[0]);

          // start height
          if (currentElevation === 83) {
            currentElevation = 97;
          }

          // end height
          if (neighborElevation === 69) {
            neighborElevation = 122;
          }

          if (neighborElevation - currentElevation <= 1) {
            return true;
          }

          return false;
        })
        .map((neighbor) => [neighbor, steps + 1])
    );
  }
};

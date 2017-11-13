let maze = {};

function isWall(x, y, input) {
  let n = (x * x) + (3 * x) + (2 * x * y) + y + (y * y) + input;

  // Brian Kernighan’s Algorithm
  let count = 0;
  while (n) {
    n &= (n - 1);
    count++;
  }

  if (count % 2 === 0) {
    return false;
  }
  return true;
}

function updateMap(queue, x, y, input) {
  if ((x - 1) >= 0 && !maze[`${x - 1},${y}`] && !isWall(x - 1, y, input)) {
    maze[`${x - 1},${y}`] = {
      visited: false,
      parent: `${x},${y}`
    };
    queue.push({x: x - 1, y: y});
  }
  if ((y - 1) >= 0 && !maze[`${x},${y - 1}`] && !isWall(x, y - 1, input)) {
    maze[`${x},${y - 1}`] = {
      visited: false,
      parent: `${x},${y}`
    };
    queue.push({x: x, y: y - 1});
  }
  if (!maze[`${x + 1},${y}`] && !isWall(x + 1, y, input)) {
    maze[`${x + 1},${y}`] = {
      visited: false,
      parent: `${x},${y}`
    };
    queue.push({x: x + 1, y: y});
  }
  if (!maze[`${x},${y + 1}`] && !isWall(x, y + 1, input)) {
    maze[`${x},${y + 1}`] = {
      visited: false,
      parent: `${x},${y}`
    };
    queue.push({x: x, y: y + 1});
  }
}

function backtrack(maze, x, y) {
  let steps = 0;
  let xy = `${x},${y}`;
  while (xy !== '0,0') {
    xy = maze[xy].parent;
    steps++;
  }

  return steps - 2;
}

module.exports = (input) => {
  input = parseInt(input, 10);

  let queue = [];
  let goalX = 31;
  let goalY = 39;

  // push start position into queue
  queue.push({x: 0, y: 0});
  maze['0,0'] = {
    visited: false
  };

  while (queue.length > 0) {
    // take the next position in the queue
    let {x, y} = queue.shift();
    maze[`${x},${y}`].visited = true;

    // check if goal has been reached
    if (`${x},${y}` === `${goalX},${goalY}`) {
      return backtrack(maze, x, y);
    }

    // update the maze
    updateMap(queue, x, y, input);
  }

  return 0;
};
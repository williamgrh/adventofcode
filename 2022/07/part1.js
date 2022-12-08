module.exports = (input) => {
  let path = ["/"];
  const pathSizes = { "/": 0 };

  // simulate filesystem
  input.forEach((line) => {
    // handle inputs
    if (line.charAt(0) === "$") {
      // handle cd
      if (line.substring(2, 4) === "cd") {
        const destination = line.substring(5);

        if (destination === "/") {
          path = ["/"];
        } else if (destination === "..") {
          path.pop();
        } else {
          path.push(destination);
          pathSizes[path.join(".")] = 0;
        }
      }
    } else {
      // handle ls output
      if (line.substring(0, 3) === "dir") {
        const dir = [...path, line.substring(4)];
        pathSizes[dir.join(".")] = 0;
      } else {
        const [size, name] = line.split(" ");
        for (let i = 0; i < path.length; i++) {
          pathSizes[path.slice(0, i + 1).join(".")] += Number(size);
        }
      }
    }
  });

  return Object.entries(pathSizes).reduce((sum, [key, value]) => {
    if (value < 100000) {
      return sum + value;
    }

    return sum;
  }, 0);
};

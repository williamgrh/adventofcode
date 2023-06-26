const compare = (left, right) => {
  const isList = {
    left: typeof left === "object",
    right: typeof right === "object",
  };

  if (!isList.left && !isList.right) {
    if (left < right) {
      return true;
    } else if (left === right) {
      return undefined;
    } else {
      return false;
    }
  } else if (isList.left && isList.right) {
    for (let i = 0; i < Math.min(left.length, right.length); i++) {
      const comparison = compare(left[i], right[i]);
      if (comparison !== undefined) {
        return comparison;
      }
    }

    if (left.length < right.length) {
      return true;
    } else if (left.length === right.length) {
      return undefined;
    } else {
      return false;
    }
  } else {
    if (isList.left) {
      return compare(left, [right]);
    } else {
      return compare([left], right);
    }
  }
};

module.exports = (input) => {
  const correct = [];

  for (let i = 0; i < input.length - 1; i += 3) {
    if (compare(JSON.parse(input[i]), JSON.parse(input[i + 1]))) {
      correct.push(i / 3 + 1);
    }
  }

  return correct.reduce((a, b) => a + b, 0);
};

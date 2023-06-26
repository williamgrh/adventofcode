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
  const divider1 = [[2]];
  const divider2 = [[6]];
  const packets = [
    divider1,
    divider2,
    ...input.filter((p) => p !== "").map(JSON.parse),
  ].sort((left, right) => {
    const comparison = compare(left, right);
    if (comparison) {
      return -1;
    } else if (comparison === false) {
      return 1;
    } else {
      return 0;
    }
  });

  return (packets.indexOf(divider1) + 1) * (packets.indexOf(divider2) + 1);
};

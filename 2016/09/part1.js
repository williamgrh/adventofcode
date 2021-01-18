module.exports = (input) => {
  let length = 0;
  let a,
    b,
    i = 0;
  while (input.length > 0) {
    // Find next marker and strip to it
    i = input.indexOf("(");
    if (i < 0) {
      length += input.length;
      break;
    }
    input = input.slice(i);
    length += i;

    // Get details about marker and strip it out
    i = input.indexOf(")");
    [a, b] = input
      .slice(1, i)
      .split("x")
      .map((n) => parseInt(n, 10));
    input = input.slice(i + 1);

    // Apply the current marker and strip out its result
    input = input.slice(a);
    length += a * b;
  }

  return length;
};

module.exports = (input) => {
  let firewall = [...Array(parseInt(input[input.length - 1].split(': ')[0], 10) + 1)];
  input.map(l => {
    l = l.split(': ');
    firewall[parseInt(l[0], 10)] = {range: parseInt(l[1], 10)};
  });

  let delay = -1, depth;
  while (depth !== firewall.length) {
    depth = 0; delay++;
    while (depth < firewall.length && !(firewall[depth] && (depth + delay) % ((firewall[depth].range * 2) - 2) === 0)) {
      depth++;
    }
  }
  return delay;
}; 
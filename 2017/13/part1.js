module.exports = (input) => {
  let firewall = [...Array(parseInt(input[input.length - 1].split(': ')[0], 10) + 1)];
  input.map(l => {
    l = l.split(': ');
    firewall[parseInt(l[0], 10)] = {range: parseInt(l[1], 10)};
  });

  let severity = 0, depth = 0;
  while (depth < firewall.length) {
    if (firewall[depth] && depth % ((firewall[depth].range * 2) - 2) === 0) {
      severity += depth * firewall[depth].range;
    }
    depth++;
  }

  return severity;
}; 
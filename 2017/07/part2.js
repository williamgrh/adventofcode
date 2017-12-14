const _ = require('lodash')
module.exports = (input) => {
  // create array of nodes by name, no connections
  let nodes = input.reduce((nodes, line) => {
    const name = line.substring(0, line.indexOf(' '));
    const weight = parseInt(line.substring(line.indexOf('(') + 1, line.indexOf(')')), 10);
    let children = [];
    if (line.indexOf('>') > -1) children = line.substring(line.indexOf('> ') + 2).split(', ');
    nodes[name] = {name, weight, children}
    return nodes;
  }, {});

  // find initial node
  let node = Object.keys(nodes)[0];
  let parent = _.find(nodes, (n) => _.includes(n.children, node));
  while (parent) {
    node = parent.name;
    parent = _.find(nodes, (n) => _.includes(n.children, node));
  }

  const getWeight = (node) => node.weight + node.children.reduce((sum, node) => sum + getWeight(nodes[node]), 0);
  const findUnbalancedChildAndDiff = (node) => {
    const weights = node.children.map(n => getWeight(nodes[n]));
    const dict = _.invert(_.countBy(weights));
    if (!dict['1']) return {child: -1, diff: 0};
    const diff = parseInt(Object.values(_.pickBy(dict, (v, k) => k !== '1'))[0], 10) - parseInt(dict['1'], 10);
    return {child: weights.indexOf(parseInt(dict['1'], 10)), diff};
  };
  
  let prevChildAndDiff = {};
  while (true) {
    let {child, diff} = findUnbalancedChildAndDiff(nodes[node]);
    if (child !== -1 && nodes[nodes[node].children[child]].children.length > 0) {
      prevChildAndDiff = {child, diff};
      node = nodes[node].children[child];
    } else {
      return nodes[node].weight + prevChildAndDiff.diff;
    }
  }
};
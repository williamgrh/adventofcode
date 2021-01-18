const _ = require("lodash");
module.exports = (input) => {
  // create array of nodes by name, no connections
  let nodes = input.reduce((nodes, line) => {
    const name = line.substring(0, line.indexOf(" "));
    const weight = parseInt(
      line.substring(line.indexOf("(") + 1, line.indexOf(")")),
      10
    );
    let children = {};
    if (line.indexOf(">") > -1)
      children = line.substring(line.indexOf("> ") + 2).split(", ");
    nodes[name] = { name, weight, children };
    return nodes;
  }, {});

  // find initial node
  let node = Object.keys(nodes)[0];
  let parent = _.find(nodes, (n) => _.includes(n.children, node));
  while (parent) {
    node = parent.name;
    parent = _.find(nodes, (n) => _.includes(n.children, node));
  }

  return node;
};

module.exports = (input) => {
  const createTree = (parent, nodes) => {
    let children = [];
    nodes.map((n, i) => {
      // change to reduce on []?
      let m = n.split("/"),
        j = m.indexOf(parent);
      if (j >= 0) {
        nodes.splice(i, 1);
        m.splice(j, 1);
        children.push({
          parent: +parent,
          value: +m[0],
          children: createTree(m[0], nodes),
        });
        nodes.unshift(n);
      }
    });

    return children;
  };

  let tree = { parent: 0, value: 0, children: createTree("0", input) };

  const getMaxStrength = (node) => {
    if (node.children.length === 0) return node.value + node.parent;
    return (
      node.value +
      node.parent +
      Math.max.apply(
        null,
        node.children.map((c) => {
          return getMaxStrength(c);
        })
      )
    );
  };

  return getMaxStrength(tree);
};

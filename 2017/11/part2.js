
module.exports = (input) => {
  input = input.split(',');
  let positions = [{x: 0, y: 0, z: 0}];
  input.map(d => {
    let {x, y, z} = positions[positions.length - 1];
    if (d === 'n') positions.push({x, y: y + 1, z: z + 1});
    else if (d === 's') positions.push({x, y: y - 1, z: z - 1});
    else if (d === 'ne') positions.push({x: x + 1, y, z: z + 1});
    else if (d === 'se') positions.push({x: x + 1, y: y - 1, z});
    else if (d === 'sw') positions.push({x: x - 1, y, z: z - 1});
    else if (d === 'nw') positions.push({x: x - 1, y: y + 1, z});
  })
  return Math.max.apply(null, positions.map((p) => (Math.abs(p.x) + Math.abs(p.y) + Math.abs(p.z)) / 2));
};
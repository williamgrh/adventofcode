module.exports = (input) => {
  let map = {};
  let i = 0;
  input.forEach((floor) => {
    map[i] = {};
    floor = floor.replace(/[\.\,]/g, "").split(" ");

    // get entities and load them into the map
    for (let j = 0; j < floor.length; j++) {
      if (floor[j].match(/generator|microchip/)) {
        let entityType = floor[j - 1][0];
        if (!map[i][entityType]) {
          map[i][entityType] = { g: false, m: false };
        }
        map[i][entityType][floor[j][0]] = true;
      }
    }
    i += 1;
  });

  // add custom entities for part 2
  map[0]["e"] = { g: true, m: true };
  map[0]["d"] = { g: true, m: true };

  let steps = 0;
  for (let i = 0; i < input.length - 1; i++) {
    // get all pairs on current floor
    let pairs = [];
    for (let entityType in map[i]) {
      if (map[i][entityType].g && map[i][entityType].m) pairs.push(entityType);
    }

    // move all pairs up a floor
    steps += 4 * (pairs.length - 1) + 1;
    pairs.forEach((entityType) => {
      map[i + 1][entityType] = map[i][entityType];
      delete map[i][entityType];
    });

    // move any mismatched entities
    for (let entityType in map[i]) {
      steps += 2;
      if (!map[i + 1][entityType]) {
        map[i + 1][entityType] = map[i][entityType];
      } else if (map[i][entityType].g) {
        map[i + 1][entityType].g = true;
      } else if (map[i][entityType].m) {
        map[i + 1][entityType].m = true;
      }
    }

    // clear the floor as all entities have been moved
    map[i] = {};
  }

  return steps;
};

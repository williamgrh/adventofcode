const _ = require("lodash");
module.exports = (input) => {
  let programs = {};
  input.map((p) => {
    p = p.split(" ");
    programs[p[0]] = p.slice(2).map((i) => i.replace(",", ""));
  });
  let relatedPrograms = [],
    toVisit = [],
    allPrograms = Object.keys(programs),
    groups = 0;
  while (allPrograms.length > 0) {
    toVisit.push(allPrograms[0]);
    while (toVisit.length > 0) {
      let c = toVisit.pop();
      relatedPrograms.push(c);
      toVisit = _.difference(toVisit.concat(programs[c]), relatedPrograms);
    }
    allPrograms = _.difference(allPrograms, relatedPrograms);
    (relatedPrograms = []), (toVisit = []), groups++;
  }
  return groups;
};

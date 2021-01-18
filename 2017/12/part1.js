const _ = require("lodash");
module.exports = (input) => {
  let programs = {};
  input.map((p) => {
    p = p.split(" ");
    programs[p[0]] = p.slice(2).map((i) => i.replace(",", ""));
  });
  let relatedPrograms = [],
    toVisit = ["0"];
  while (toVisit.length > 0) {
    let c = toVisit.pop();
    relatedPrograms.push(c);
    toVisit = _.difference(toVisit.concat(programs[c]), relatedPrograms);
  }
  return _.uniq(relatedPrograms).length;
};

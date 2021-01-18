const _ = require("lodash");
module.exports = (input) => {
  input = input.split(",");
  let steps = _.countBy(input);
  steps = {
    n: Math.abs(steps.n - steps.s),
    ne: Math.abs(steps.ne - steps.sw),
  };
  return steps.n + steps.ne;
};

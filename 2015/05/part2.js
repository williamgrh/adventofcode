module.exports = (input) => {
  // parse input data
  input = input.map((s) => s.trim());
  var count = 0;

  // check each string
  input.forEach((s) => {
    let twicePair = false;
    let sandwich = false;
    let pairs = [];
    for (let i = 0; i < s.length - 1; i++) {
      if (i !== s.length - 2 && s[i] === s[i + 2]) sandwich = true;
      let pair = `${s[i]}${s[i + 1]}`;
      let index = pairs.indexOf(pair);
      if (index >= 0 && i - index > 1) twicePair = true;
      else pairs.push(pair);
    }
    if ((sandwich && twicePair) === false) return;
    count++;
  });

  return count;
};

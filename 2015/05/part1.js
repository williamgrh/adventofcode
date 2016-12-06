module.exports = (input) => {
  // parse input data
  input = input.map(s => s.trim());
  var count = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var blacklist = ['ab', 'cd', 'pq', 'xy'];

  // check each string
  input.forEach(s => {
    let doubleLetter = false;
    for (let i = 0; i < s.length - 1; i++) {
      if (blacklist.includes(s[i].concat(s[i+1]))) return;
      if (s[i] === s[i+1]) doubleLetter = true;
    }
    if (doubleLetter === false) return;
    if (s.split('').filter(c => vowels.includes(c)).length < 3) return;
    count++;
  });

  return count;
};
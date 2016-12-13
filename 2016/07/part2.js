module.exports = (input) => {
  input = input.map(s => s.trim().split(/\[|\]/));
  var count = 0;
  for (let i = 0; i < input.length; i++) {
    let aba = [];
    let bab = [];
    for (let j = 0; j < input[i].length; j++) {
      let s = input[i][j];
      let match = [];
      for (let k = 0; k < s.length - 2; k++) {
        if (s[k] === s[k+2] && s[k] !== s[k+1]) {
          if (j % 2 === 0) {
            aba.push(s[k] + s[k+1] + s[k+2]);
          } else {
            bab.push(s[k] + s[k+1] + s[k+2]);
          }
        }
      }
    }
    bab.forEach((s, i, a) => a[i] = s[1] + s[0] + s[1]);
    for (let j = 0; j < aba.length; j++) {
      if (bab.includes(aba[j])) {
        count++;
        break;
      }
    }
  }

  return count;
};
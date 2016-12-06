module.exports = (input) => {
  // parse input data
  var data = input.map(s => {
    let a = s.trim().slice(0, -1).split(/[\[]/);
    let i = a[0].lastIndexOf('-');
    return [a[0].slice(0, i).replace(/-/g, ''), a[1], parseInt(a[0].slice(i+1))];
  });

  var sectorSum = 0;
  // loop through data, increment sectorSum for real rooms
  for (let i = 0; i < data.length; i++) {
    let room = data[i];
    let counts = {};
    for (let i = 0; i < room[0].length; i++) {
      let key = room[0][i];
      if (!counts[key]) {
        counts[key] = 0;
      }
      counts[key]++;
    }

    // sort counts, create string to compare with checksum
    var check = Object.keys(counts).sort((a, b) => {
      if (counts[a] < counts[b]) {
        return -1;
      } else if (counts[a] > counts[b]) {
        return 1;
      } else if (counts[a] === counts[b]) {
        if (a < b) {
          return 1;
        } else if (b < a) {
          return -1;
        }
      }
      return 0;
    }).reverse().slice(0, 5).join('');

    if (check === room[1]) {
      sectorSum += room[2];
    }
  }

  return sectorSum;
};
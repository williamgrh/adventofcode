module.exports = (input) => {
  // parse input data
  var data = input.map(s => {
    let a = s.trim().slice(0, -1).split(/[\[]/);
    let i = a[0].lastIndexOf('-');
    return [a[0].slice(0, i), a[1], parseInt(a[0].slice(i+1))];
  });

  var rooms = [];
  // loop through data, increment sectorSum for real rooms
  for (let i = 0; i < data.length; i++) {
    let room = data[i];
    let counts = {};
    let name = room[0].replace(/-/g, '');
    for (let i = 0; i < name.length; i++) {
      let key = name[i];
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
      rooms.push(room);
    }
  }

  // decrypt each name and check if it is what we are looking for
  for (let i = 0; i < rooms.length; i++) {
    let encrypted = rooms[i][0];
    let decrypted = '';
    let n = rooms[i][2] % 26;
    for (let j = 0; j < encrypted.length; j++) {
      let letter = encrypted.codePointAt(j) + n;
      if (letter > 122) {
        letter -= 26;
      }

      if (encrypted[j] === '-') {
        letter = ' ';
      }
      
      decrypted = decrypted + String.fromCodePoint(letter);
    }

    if (decrypted.includes('northpole')) {
      return rooms[i][2];
    }
  }
};
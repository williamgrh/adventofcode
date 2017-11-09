/* 
  Notes:
  Try working backwards, get A and B first with regex then do stuff based on the command
*/

class Screen {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.pixels = {};
  }

  getColumn(x) {
    let col = [];
    for (let y = 0; y < this.height; y++) {
      col.push(this.pixels[`${x},${y}`] || 0);
    }
    return col;
  }

  getRow(y) {
    let row = [];
    for (let x = 0; x < this.width; x++) {
      row.push(this.pixels[`${x},${y}`] || 0);
    }
    return row;
  }

  getLitPixels() {
    return Object.keys(this.pixels).reduce((a, b) => a + this.pixels[b], 0);
  }

  rect(a, b) {
    for (let x = 0; x < a; x++) {
      for (let y = 0; y < b; y++) {
        this.pixels[`${x},${y}`] = 1;
      }
    }
  }

  rotateRow(a, b) {
    const row = this.getRow(a);
    for (let x = 0; x < this.width; x++) {
      this.pixels[`${(x + b) % this.width},${a}`] = row[x];
    }
  }

  rotateCol(a, b) {
    const col = this.getColumn(a);
    for (let y = 0; y < this.height; y++) {
      this.pixels[`${a},${(y + b) % this.height}`] = col[y];
    }
  }
}

module.exports = (input) => {
  let screen = new Screen(6, 50);
  for (let i in input) {
    let a, b;
    if (input[i].startsWith('rect')) {
      [a, b] = input[i].slice(5).split('x').map(n => parseInt(n, 10));
      screen.rect(a, b);
    } else if (input[i].startsWith('rotate row')) {
      [a, b] = input[i].slice(13).split(' by ').map(n => parseInt(n, 10));
      screen.rotateRow(a, b);
    } else if (input[i].startsWith('rotate column')) {
      [a, b] = input[i].slice(16).split(' by ').map(n => parseInt(n, 10));
      screen.rotateCol(a, b);
    }
  }

  return screen.getLitPixels();
};
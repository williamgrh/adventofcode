module.exports = (input) => {
  let discs = [];
  input.forEach(disc => {
    disc = disc.replace('.', '').split(' ');
    discs.push({
      startPosition: parseInt(disc[11], 10),
      numPositions: parseInt(disc[3], 10)
    });
  });

  for (let t = 0; t >= 0; t++) {
    let capsuleFell = true;
    for (let i = 0; i < discs.length; i++) {
      let discPosition = (discs[i].startPosition + t + i + 1) % discs[i].numPositions;
      if (discPosition !== 0) {
        capsuleFell = false;
        break;
      }
    }
    if (capsuleFell) {
      return t;
    }
  }
};
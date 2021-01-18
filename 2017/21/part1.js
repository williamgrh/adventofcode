const _ = require("lodash");
module.exports = (input) => {
  let rules = {};
  input.map((r) => (rules[r.split(" => ")[0]] = r.split(" => ")[1]));
  let image = [".#./..#/###"];

  const getPermutations = (img) => {
    let rotations = [img];
    // get rotations (clockwise)
    for (let r = 0; r < 3; r++) {
      img = img.split("/");
      let rotatedImg = [];
      for (let c = 0; c < img[0].length; c++) {
        let row = [];
        for (let r = 0; r < img.length; r++) row.push(img[r][c]);
        rotatedImg.push(row.reverse().join(""));
      }
      img = rotatedImg.join("/");
      rotations.push(img);
    }

    let flips = [];
    // flip all rotations
    for (let i = 0; i < 4; i++) {
      let img = rotations[i].split("/");
      // horizontal
      rotations.push(rotations[i].split("/").reverse().join("/"));
      // vertical
      rotations.push(
        rotations[i]
          .split("/")
          .map((r) => r.split("").reverse().join(""))
          .join("/")
      );
    }

    return _.uniq(rotations.concat(flips));
  };

  for (let iter = 0; iter < 5; iter++) {
    let img = image[0].split("/"),
      l = img.length;
    console.log(l);
    if (l % 2 === 0) {
      let rows = [];
      for (let r = 0; r < l; r++)
        rows.push([img[r].slice(0, l / 2), img[r].slice(l / 2)]);
      img = ["", "", "", ""];
      console.log(rows);
      return;

      // slice each row
      // create 4 new images and push them
    }

    // loop through images
    // get permutations and try to apply rules
    // join all images
  }

  // count pixels
  return 1;
};

/*
  l = 4
  A B C D
  E F G H
  I J K L
  M N O P

  A B | C D
  E F | G H
  - - + - -
  I J | K L
  M N | O P
*/

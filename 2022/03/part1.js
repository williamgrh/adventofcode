module.exports = (input) => {
  return input.reduce((total, rucksack) => {
    const compartment1 = rucksack.substr(0, rucksack.length / 2).split("");
    const compartment2 = rucksack.substr(rucksack.length / 2, rucksack.length);

    for (let i = 0; i < compartment1.length; i++) {
      const item = compartment1[i];
      if (compartment2.indexOf(item) >= 0) {
        if (item.toUpperCase() === item) {
          total += item.charCodeAt(0) - 38;
        } else {
          total += item.charCodeAt(0) - 96;
        }

        return total;
      }
    }

    return total;
  }, 0);
};

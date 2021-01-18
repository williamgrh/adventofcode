module.exports = (input, programs = "abcdefghijklmnop") => {
  input = input.split(",");
  programs = [...programs];
  for (let move of input) {
    move = [move[0], ...move.slice(1).split("/")];
    if (move[0] === "p")
      move = ["x", programs.indexOf(move[1]), programs.indexOf(move[2])];
    if (move[0] === "s")
      programs = programs
        .slice(programs.length - +move[1])
        .concat(programs.slice(0, programs.length - +move[1]));
    if (move[0] === "x")
      programs[+move[1]] = programs.splice(+move[2], 1, programs[+move[1]])[0];
  }
  return programs.join("");
};

module.exports = (input) => {
  input = input.replace(/!./g, '').replace(/<.*?>/g, '').replace(/,/g, '');
  let score = 0;
  while (input.length > 0) {
    score += input.indexOf('}');
    input = input.replace('{}', '');
  }
  return score;
};
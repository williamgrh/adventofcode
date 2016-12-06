const fs = require('fs');

let year = process.argv[2];
let day = process.argv[3];
year = year.length === 2 ? '20'.concat(year) : year;
day = day.length === 1 ? '0'.concat(day) : day;

let dir = `./${year}/${day}`;
let func = 'module.exports = (input) => {\n\treturn input;\n};';

if (!fs.existsSync(dir)) {
  // dir, input, and code
  fs.mkdirSync(dir);
  fs.writeFileSync(`${dir}/input.txt`, '');
  fs.writeFileSync(`${dir}/part1.js`, func);
  fs.writeFileSync(`${dir}/part2.js`, func);

  // tests
  //it('day 1, part 1', () => test(16, 1, 1, 146));
  let tests = fs.readFileSync(`${year}/test.js`, 'utf-8').split('\n');
  tests.splice(tests.length - 2, 0,
    ``,
    `    it('day ${day}, part 1', () => test(${year.slice(-2)}, ${day}, 1, 0));`,
    `    it('day ${day}, part 2', () => test(${year.slice(-2)}, ${day}, 2, 0));`
  );
  fs.writeFileSync(`${year}/test.js`, tests.join('\n'));
}
const fs = require("fs");

let today = new Date();
let year = today.getFullYear().toString();
let day = today.getDate().toString();
if (process.argv.length >= 3) {
  year = process.argv[2];
  day = process.argv[3];
}

year = year.length === 2 ? "20".concat(year) : year;
day = day.length === 1 ? "0".concat(day) : day;

const testFunc = `module.exports = (test) => {\n  describe("${year}", () => {\n  });\n};\n`;
const dayFunc = "module.exports = (input) => {\n  return 1;\n};\n";

let dir = `./${year}`;
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

if (!fs.existsSync(`${dir}/test.js`)) {
  fs.writeFileSync(`${dir}/test.js`, testFunc);
}

dir = `./${year}/${day}`;

if (!fs.existsSync(dir)) {
  // dir, input, and code
  fs.mkdirSync(dir);
  fs.writeFileSync(`${dir}/input.txt`, "");
  fs.writeFileSync(`${dir}/part1.js`, dayFunc);
  fs.writeFileSync(`${dir}/part2.js`, dayFunc);

  // tests
  let tests = fs.readFileSync(`${year}/test.js`, "utf-8").split("\n");
  tests.splice(
    tests.length - 3,
    0,
    ``,
    `    it('day ${day}, part 1', () => test(${year.slice(
      -2
    )}, ${day}, 1, 0));`,
    `    it('day ${day}, part 2', () => test(${year.slice(-2)}, ${day}, 2, 0));`
  );
  fs.writeFileSync(`${year}/test.js`, tests.join("\n"));
}

console.log("> done!");

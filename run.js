const moment = require('moment');
const { readFileSync, readdirSync, lstatSync } = require('fs');
const { join } = require('path');

function run(year, day, part) {
  let log = process.env.NODE_ENV !== 'test';
  part = part.toString().slice(-1);
  day = day.toString().length === 1 ? '0'.concat(day): day;
  year = year.toString().length === 2 ? '20'.concat(year) : year;

  let input = readFileSync(`./${year}/${day}/input.txt`, 'utf-8').trimRight().split('\n');
  let startTime = moment();

  if (log) console.log(`${year}.${day}.${part} running...`);

  let answer = require(`./${year}/${day}/part${part}`)(input.length === 1 ? input[0] : input);

  if (log) console.log(`${year}.${day}.${part} answer: `, answer);

  let endTime = moment();
  
  if (log) console.log(`${year}.${day}.${part} time: `, moment(endTime.diff(startTime)).format('mm:ss:SSSS'));

  return answer;
}

const getDirectories = (s) => readdirSync(s).map(n => join(s, n)).filter(p => lstatSync(p).isDirectory());

module.exports = (year, day, part) => {
  if (year === 'latest') {
    year = Math.max.apply(null, getDirectories('./').map(d => parseInt(d, 10)).filter(isFinite));
    day = Math.max.apply(null, getDirectories(`./${year}/`).map(d => parseInt(d.slice(-2), 10)).filter(isFinite));
  }

  if (!part) {
    run(year, day, 1);
    console.log();
    run(year, day, 2);
  } else {
    return run(year, day, part);
  }
};
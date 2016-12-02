const moment = require('moment');
const fs = require('fs');

module.exports = function run(year, day, part) {
  let input = fs.readFileSync(`./${year}/${day}/input.txt`, 'utf-8').trimRight().split('\n');
  let startTime = moment();

  console.log(`${year}.${day}.${part} running...`);

  let answer = require(`./${year}/${day}/part${part}`)(input.length === 1 ? input[0] : input);

  console.log(`${year}.${day}.${part} answer: `, answer);

  let endTime = moment();
  
  console.log(`${year}.${day}.${part} time: `, moment(endTime.diff(startTime)).format('mm:ss:SSSS'));

  return answer;
}
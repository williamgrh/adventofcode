module.exports = (input) => {
  let diskLength = 272, a = input;
  do a = a.concat('0', a.split('').map(c => c === '0' ? '1' : '0').reverse().join(''));
  while (a.length < diskLength);
  a = a.slice(0, diskLength);
  const calcChecksum = (d) => {
    let checksum = '';
    do {
      s = d.slice(0, 2).split('');
      d = d.slice(2, d.length);
      checksum += s[0] === s[1] ? '1' : '0';
    } while (d.length > 0);
    return checksum;
  };
  while (a.length % 2 === 0) a = calcChecksum(a);
  return a;
};
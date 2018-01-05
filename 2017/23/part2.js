module.exports = (input) => {
  input = input.map(l => l.split(' '));
  
  const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
    return true;
  }

  let b = (+input[0][2] * +input[4][2]) + -input[5][2], c = b + -input[7][2], h = 0;
  for (let i = b; i <= c; i += 17) {
    if (!isPrime(i)) h++;
  }

  return h;
};
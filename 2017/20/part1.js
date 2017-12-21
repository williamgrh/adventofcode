module.exports = (input) => {
  let particles = [];
  input.map(p => {
    p = p.split(', ').map(d => d.slice(3, -1).split(','));
    particles.push({
      px: +p[0][0], py: +p[0][1], pz: +p[0][2],
      vx: +p[1][0], vy: +p[1][1], vz: +p[1][2],
      ax: +p[2][0], ay: +p[2][1], az: +p[2][2]
    });
  });

  for (let i = 0; i < 1000; i++) {
    particles = particles.map(p => {
      p.vx += p.ax; p.vy += p.ay; p.vz += p.az;
      p.px += p.vx; p.py += p.vy; p.pz += p.vz;
      return p;
    });
  }

  particles = particles.map(p => Math.abs(p.px) + Math.abs(p.py) + Math.abs(p.pz));
  
  return particles.indexOf(Math.min.apply(null, particles));
};
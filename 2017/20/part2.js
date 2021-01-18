module.exports = (input) => {
  let particles = [];
  input.map((p, i) => {
    p = p.split(", ").map((d) => d.slice(3, -1).split(","));
    particles.push({
      px: +p[0][0],
      py: +p[0][1],
      pz: +p[0][2],
      vx: +p[1][0],
      vy: +p[1][1],
      vz: +p[1][2],
      ax: +p[2][0],
      ay: +p[2][1],
      az: +p[2][2],
      i,
    });
  });

  let noCollisions = 0;
  while (noCollisions < 10) {
    let positionMap = {};
    particles = particles.map((p) => {
      p.vx += p.ax;
      p.vy += p.ay;
      p.vz += p.az;
      p.px += p.vx;
      p.py += p.vy;
      p.pz += p.vz;
      if (!positionMap[`${p.px},${p.py},${p.pz}`])
        positionMap[`${p.px},${p.py},${p.pz}`] = [];
      positionMap[`${p.px},${p.py},${p.pz}`].push(p.i);
      return p;
    });

    let collisions = false;
    Object.values(positionMap).map((v) => {
      if (v.length > 1)
        (collisions = true),
          (particles = particles.filter((p) => v.indexOf(p.i) === -1));
    });
    collisions ? (noCollisions = 0) : noCollisions++;
  }

  return particles.length;
};

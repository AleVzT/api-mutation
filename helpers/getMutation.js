function getMutation(dna) {

  const n = dna.length;
  const m = dna[0].length;

  // Validamos que las bases nitrogenadas sean validass
  const validBases = new Set(["A", "T", "C", "G"]);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!validBases.has(dna[i][j])) {
        return false;
      }
    }
  }

  // Funcion para obtener la secuencai en una direccion especifica
  function getSequence(x, y, dx, dy) {
    
    let sequence = "";
    for (let i = 0; i < 4; i++) {
      const nx = x + i * dx;
      const ny = y + i * dy;

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
        return "";
      }
      sequence += dna[nx][ny];
    }
    return sequence;
  }

  // Buscar secuencias en todas las direcciones
  const directions = [
    [1, 0],
    [0, 1],
    [1, 1],
    [-1, 1],
  ];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      for (let [dx, dy] of directions) {
        const sequence = getSequence(i, j, dx, dy);
        if (sequence.length > 0 && sequence === sequence[0].repeat(4)) {
          return true;
        }
      }
    }
  }
  return false;
}

module.exports = { getMutation };

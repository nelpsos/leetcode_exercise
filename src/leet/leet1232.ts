function checkStraightLine(coordinates: number[][]): boolean {
  let diffY = coordinates[0][1] - coordinates[1][1];
  let diffX = coordinates[0][0] - coordinates[1][0];
  let giulgi = diffX === 0 ? Infinity : diffY / diffX;
  for (let i = 1; i < coordinates.length - 1; ++i) {
    diffY = coordinates[i][1] - coordinates[i + 1][1];
    diffX = coordinates[i][0] - coordinates[i + 1][0];
    let newGiulgi = diffX === 0 ? Infinity : diffY / diffX;
    if (giulgi !== newGiulgi) return false;
  }
  return true;
}

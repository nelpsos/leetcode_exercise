function nearestValidPoint(x: number, y: number, points: number[][]): number {
  let a = {
    index: -1,
    distance: Number.MAX_VALUE,
  };
  for (let i = 0; i < points.length; ++i) {
    const ptX = points[i][0];
    const ptY = points[i][1];
    const disX = Math.abs(ptX - x);
    const disY = Math.abs(ptY - y);
    if (x === ptX && a.distance > disY) {
      a = {
        index: i,
        distance: disY,
      };
    }
    if (y === ptY && a.distance > disX) {
      a = {
        index: i,
        distance: disX,
      };
    }
  }
  return a.index;
}

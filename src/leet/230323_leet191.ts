function hammingWeight(n: number): number {
  let a = n >>> 0;
  let c = a & 1;
  while (a > 0) {
    a = a >>> 1;
    if (a & 1) {
      c++;
    }
  }
  return c;
}

function largestPerimeter(nums: number[]): number {
  let a = nums.sort((v1, v2) => v2 - v1);
  for (let i = 0; i < a.length - 2; ++i) {
    const a1 = a[i];
    const a2 = a[i + 1];
    const a3 = a[i + 2];
    const a23 = a2 + a3;
    if (a1 < a23) return a1 + a23;
  }
  return 0;
}

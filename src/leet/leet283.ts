/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let zeroCnt = 0;
  let i = 0;
  while (i < nums.length - zeroCnt) {
    if (nums[i] === 0) {
      ++zeroCnt;
      nums.splice(i, 1);
      nums.push(0);
    } else ++i;
  }
}

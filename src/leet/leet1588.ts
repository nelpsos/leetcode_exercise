function sumOddLengthSubarrays(arr: number[]): number {
  let c = Math.ceil(arr.length / 2);
  let a = [];
  for (let i = 0; i < c; ++i) a.push(1);
  for (let i = 3; i <= arr.length; i += 2) {
    /** 길이 */
    for (let j = 0; j < c && j <= arr.length - i; ++j) {
      /** 시작점 (절반 이하 & 전체길이 - 길이 이하) */
      for (let k = j; k < c && k < j + i; ++k) {
        /** 반복포인트 */
        a[k]++;
      }
    }
  }
  let result = 0;

  for (let i = 0; i < c; ++i) {
    let x =
      i === arr.length - i - 1 ? arr[i] : arr[i] + arr[arr.length - i - 1];
    result += x * a[i];
  }
  return result;
}

let v1 = [1, 4, 2, 5, 3];
let v2 = [1, 2];
let v3 = [10, 11, 12];
console.log(v1, sumOddLengthSubarrays(v1));
console.log(v2, sumOddLengthSubarrays(v2));
console.log(v3, sumOddLengthSubarrays(v3));

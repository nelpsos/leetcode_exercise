function subtractProductAndSum(n: number): number {
  let st = n.toString();
  let a = st.split("").map((el) => Number(el));
  let s = a.reduce((v1, v2) => v1 + v2, 0);
  let p = a.reduce((v1, v2) => v1 * v2, 1);
  return p - s;
}

const tc = `234
4421`;

for (let i of tc.split("\n")) {
  console.log(subtractProductAndSum(parseInt(i)));
}

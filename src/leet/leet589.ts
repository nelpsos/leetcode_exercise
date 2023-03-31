class Node1 {
  val: number;
  children: Node1[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

function preorder(root: Node1 | null): number[] {
  if (root === null) return [];
  if (root.children.length === 0) return [root.val];
  const a = root.children.map(preorder).flat();
  a.unshift(root.val);
  return a;
}

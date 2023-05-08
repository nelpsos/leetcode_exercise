class Node1 {
    constructor(val) {
        this.val = val === undefined ? 0 : val;
        this.children = [];
    }
}
function preorder(root) {
    if (root === null)
        return [];
    if (root.children.length === 0)
        return [root.val];
    const a = root.children.map(preorder).flat();
    a.unshift(root.val);
    return a;
}

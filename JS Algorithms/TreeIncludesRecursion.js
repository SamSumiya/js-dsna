class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

function TreeIncludesRecursion(root, target) {
  if (root === null) return false;
  if (root.val === target) return true;
  return (
    TreeIncludesRecursion(root.left, target) ||
    TreeIncludesRecursion(root.right, target)
  );
}

TreeIncludesRecursion(a, 'e');

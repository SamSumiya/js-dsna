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

function treeIncludes(root, target) {
  const myQueue = [root];

  while (myQueue.length > 0) {
    const current = myQueue.pop();
    if (current.val === target) {
      return true;
    }
    if (current.left) myQueue.unshift(current.left);
    if (current.right) myQueue.unshift(current.right);
  }
  return false;
}

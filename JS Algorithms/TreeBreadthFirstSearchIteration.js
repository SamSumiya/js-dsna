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

function bfs(root) {
  const output = [];
  const q = [root];
  
  while (q.length > 0) {
    const current = q.pop();
    output.push(current.val);
    if (current.left) q.unshift(current.left);
    if (current.right) q.unshift(current.right);
  }
  return output;
}

bfs(a);

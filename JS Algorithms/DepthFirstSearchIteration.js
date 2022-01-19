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

function dfs(root) {
  if (root === null) return [];
  const output = [];
  const stack = [root];

  while (stack.length > 0) {
    const popped = stack.pop();
    output.push(popped.val);

    if (popped.right) stack.push(popped.right);
    if (popped.left) stack.push(popped.left);
  }
  return output;
}

dfs(a);

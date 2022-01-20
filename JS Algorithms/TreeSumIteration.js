class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

function treeSumDFS(root) {
  const queue = [root];
  let sum = 0;

  while (queue.length > 0) {
    const currentNode = queue.pop();
    sum += currentNode.val;

    if (currentNode.left) queue.unshift(currentNode.left);
    if (currentNode.right) queue.unshift(currentNode.right);
  }

  return sum;
}

treeSumDFS(a);

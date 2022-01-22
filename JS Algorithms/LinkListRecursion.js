class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

function linkList(head) {
  if (head === null) return;

  console.log(head.val);
  return linkList(head.next);
}

linkList(a);

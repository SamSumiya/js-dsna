class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node('x');
const y = new Node('y');
const z = new Node('z');
x.next = y;
y.next = z;
// x -> y -> z


const zipperLists = (head1, head2) => {
  if (head1 === null && head2 === null) return null
  if (head1 === null) return head2 
  if (head2 === null) return head1 

  const headOneNext = head1.next
  const headTwoNext = head2.next

  head1.next = head2
  head2.next = zipperLists(headOneNext, headTwoNext)

  return head1
};





zipperLists(a, x);
// a -> x -> b -> y -> c -> z
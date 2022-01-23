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

// recursive solution
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


// iterative solution
const zipperLists = (head1, head2) => {
  let copyOfheadOne = head1;
  let nextHeadOne = head1.next;
  let tracker = 0;

  while (nextHeadOne !== null && head2 !== null) {
    if (tracker % 2 === 0) {
      copyOfheadOne.next = head2;
      head2 = head2.next;
    } else {
      copyOfheadOne.next = nextHeadOne;
      nextHeadOne = nextHeadOne.next;
    }
    copyOfheadOne = copyOfheadOne.next;
    tracker++;
  }
  if (nextHeadOne === null) copyOfheadOne.next = head2;
  if (head2 === null) copyOfheadOne.next = nextHeadOne;

  return head1;
};



zipperLists(a, x);
// a -> x -> b -> y -> c -> z
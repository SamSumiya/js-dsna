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

const reverseList = (head, prev = null) => {
  if (head === null) return prev;
  const next = head.next;
  console.log(next);
  head.next = prev;

  return reverseList(next, head);
};

// const reverseList = (head) => {

//   let prev = null
//   let current = head

//   while (current !== null) {
//     let next = current.next
//     current.next = prev
//     prev = current
//     current =  next
//   }
//   return prev
// }

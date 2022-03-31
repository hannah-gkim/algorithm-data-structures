/*
Write a function, zipperLists, that takes in the head of two linked lists as arguments. The function should zipper the two lists together into single linked list by alternating nodes. If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. The function should return the head of the zippered linked list.
*/
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z;

// const zipperLists = (head1, head2) => {
//   //abc xyz
//   if (head1 === null && head2 === null) return null;
//   if (head1 === null) return head2;
//   if (head2 === null) return head1;
//   const next1 = head1.next; //b c null
//   const next2 = head2.next; //y z null
//   head1.next = head2; //a x  b y c z null
//   head2.next = zipperLists(next1, next2); //(b,y) (c,z)
//   return head1;
// };

//iterate
const zipperLists = (head1, head2) => {
  let tail = head1;
  let curr1 = head1.next;
  let curr2 = head2;
  let count = 0;

  while (curr1 !== null && curr2 != null) {
    if (count % 2 === 0) {
      //even
      tail.next = curr2;
      curr2 = curr2.next;
    } else {
      tail.next = curr1;
      curr1 = curr1.next;
    }
    tail = tail.next;
    count += 1;
  }
  if (curr1 !== null) tail.next = curr1;
  if (curr2 !== null) tail.next = curr2;

  return head1;
};

console.log(zipperLists(a, x));
// a -> x -> b -> y -> c -> z

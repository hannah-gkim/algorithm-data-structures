class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const a = new Node("A");
// const b = new Node("B");
// const c = new Node("C");
// const d = new Node("D");

// a.next = b;
// b.next = c;
// c.next = d;

// const printLinkedList = (head) => {
//   let current = head;
//   while (current !== null) {
//     console.log("current:", current.val);
//     current = current.next;
//   }
// };

//recursion
// const printLinkedList = (head) => {
//   if (head === null) return;
//   console.log(head.val);
//   printLinkedList(head.next);
// };
// printLinkedList(a);

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const sumList = (head) => {
  let sum = 0;
  let current = head;
  while (current) {
    sum += current.val;
    current = current.next;
  }
  return sum;
};

console.log(sumList(a)); // 19

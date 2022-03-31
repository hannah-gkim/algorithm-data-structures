class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// const reverseList = (head) => {
//   let current = head; //a b[a] c[b,a] d[c,b,a]
//   let prev = null; //a
//   while (current !== null) {
//     const next = current.next; //b  c  d  e
//     current.next = prev; //[]   [a] [b,a] [c,b,a]
//     prev = current; //a b[a] c[b,a] d[c,b,a]
//     current = next; //b c d e1
//   }
//   return prev;
// };

const reverseList = (head) => {
  let curr = head;
  let prev = null;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

console.log(reverseList(a)); // f -> e -> d -> c -> b -> a

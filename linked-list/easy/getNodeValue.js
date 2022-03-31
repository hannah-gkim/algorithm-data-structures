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

a.next = b;
b.next = c;
c.next = d;

const getNodeValue = (head, index) => {
  let arr = [];
  let current = head;
  while (current) {
    arr.push(current.val);
    if (arr[index]) return arr[index];
    current = current.next;
  }
  return null;
};

console.log(getNodeValue(a, 2)); // 'c'
console.log(getNodeValue(a, 3)); // 'd'

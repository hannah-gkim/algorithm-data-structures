// a new implementation of the linked list
/*
ADT:
# Main operations
prepend(value)        -> Add a node in the beginning
append(value)         -> Add a node in the end
pop()                 -> Remove a node from the end
popFirst()            -> Remove a node from the beginning
head()                -> Return the first node
tail()                -> Return the last node
remove(Node)*         -> Remove Node from the list
*/

// NOTE: no type-safety

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    append(value) {
      let node = new Node(value);
      // if list is empty
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        this.tail = node;
      }
    }
    // add to the beginning
    prepend(value) {
      let node = new Node(value);
      node.next = this.head;
      this.head = node;
    }
  
    pop() {
      let cur = this.head;
      // only one or no item exists
      if (!cur) return null;
      // if only head exist? pop and =? null???
      if (!cur.next) {
        this.head = null;
        return cur;
      }
      // move till the 2nd last
      while (cur.next.next) cur = cur.next; // => when there is at least 3 nodes?
      let last = this.tail; //cur
      this.tail = cur;
      this.tail.next = null; //cur.next=null
      return last;
    }
  
    popFirst() {
      let first = this.head;
      if (this.head && this.head.next) {
        this.head = this.head.next;
        first.next = null;
      } else this.head = null;
      return first;
    }
  
    head() {
      return this.head;
    }
  
    removeAt(index) {
      //1
      let i = 0; // is always going to point to cur
      let cur = this.head; //next
      let prev = null; //head
  
      while (cur != null) {
        if (i == index) {
          // remove
          if (prev == null) this.head = cur.next;
          // prev is 1 idx before target idx, cur is to remove
          //prev.next needs to be replaced with cur.next because we are getting rid of cur
          else prev.next = cur.next;
          cur.next = null;
          return cur.value;
        } else {
          prev = cur;
          cur = cur.next;
          i++;
        }
      }
      return null;
    }
  
    insertAt(index, value) {
      if (index == 0) return this.prepend(value);
      let cur = this.head;
      let i = 0;
      while (cur != null) {
        if (i == index - 1) {
          let node = new Node(value);
          node.next = cur.next;
          cur.next = node;
          return true;
        } else {
          i++;
          cur = cur.next;
        }
      }
      return false;
    }
  
    tail() {
      return this.tail;
    }
  
    _toArray() {
      let arr = [];
      let cur = this.head;
      while (cur) {
        arr.push(cur.value);
        cur = cur.next;
      }
  
      return arr;
    }
  }
  
  module.exports = LinkedList;
  
  /* TEST */
  
  let l = new LinkedList();
  l.append(3);
  l.append(4);
  l.append(5);
  //l.append(10);
  // l.append(20);
  l.prepend(2);
  //l.popFirst();
  //l.pop();
  //l.removeAt(1);
  //l.insertAt(1, 10);
  
  //console.log(l.pop().value, 5);
  // console.log(l.removeAt(1), 4);
  
  // console.log(l._toArray());
  // l.insertAt(2, 40);
  console.log(l._toArray());
  
  console.log("linkedList->", l);
  
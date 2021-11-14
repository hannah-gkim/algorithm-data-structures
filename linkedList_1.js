// class
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);
// let node4 = new Node(4);
// node1.next = node2;
// let current = node1.next;
// current.next = node3;
// current = current.next;
// current.next = node4;
// console.log(node1);

// function
//   var Node = function (element) {
//     this.element = element;
//     this.next = null;
//   };

function LinkedList() {
  let length = 0;
  let head = null;

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  //add
  this.add = function (element) {
    let node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      let currentNode = head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node; // head.next
    }
    length++;
  };

  //remove
  this.remove = function (element) {
    let currentNode = head;
    let previousNode;
    if (currentNode.element === element) {
      console.log("head removed");
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        //4
        previousNode = currentNode; //3
        currentNode = currentNode.next; //4
        console.log("none head removed");
      }
      previousNode.next = currentNode.next; //5
    }
    length--;
  };

  //check if list is empty
  this.isEmpty = function () {
    return length === 0;
  };

  // getting the idx of element looking for
  this.indexOf = function (element) {
    let currentNode = head;
    let index = -1;

    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  };
  // find element using idx
  this.elementAt = function (index) {
    let currentNode = head;
    let count = 0;
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  };

  //adding node in the middle of list
  this.addAt = function (index, element) {
    let node = new Node(element);
    let currentNode = head;
    let previousNode;
    let currentIndex = 0;

    if (index > length) {
      return false;
    }

    if (index === 0) {
      node.next = currentNode;
      head = node;
    } else {
      while (currentIndex < index) {
        //0 < 1
        currentIndex++; //1
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    length++;
  };

  this.removeAt = function (index) {
    let currentNode = head;
    let previousNode;
    let currentIndex = 0;

    if (index < 0 || index >= length) {
      return null;
    }
    if (index === 0) {
      head = currentNode.next;
    } else {
      while (currentIndex < index) {
        // 0 < 2
        //[kitten, puppy,   "dog", <---   cat, fish] dog idx 2
        currentIndex++; //1 //2
        previousNode = currentNode; //kitten //puppy
        currentNode = currentNode.next; //puppy //dog
      }
      previousNode.next = currentNode.next; // "dog"<---xxx cat
      //so got rid of dog [kitten, puppy, cat, fish]
    }
    length--;
    return currentNode.element; //return what is being replaced
  };
}

let myLinkedList = new LinkedList();

myLinkedList.add("Kitten");
myLinkedList.add("Puppy");
myLinkedList.add("Dog");
myLinkedList.add("Cat");
myLinkedList.add("Fish");
// myLinkedList.remove("Puppy");
console.log(myLinkedList.head());
// console.log(myLinkedList.size());
// console.log(myLinkedList.removeAt(3));
// console.log(myLinkedList.elementAt(3));
// console.log(myLinkedList.indexOf("Puppy"));

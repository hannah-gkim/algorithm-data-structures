// class
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
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
    //Node { element: 'Kitten', next: null }
    //Node { element: 'Puppy', next: null }
    //Node { element: 'Cat', next: null }
    if (head === null) {
      head = node; //Node { element: 'Kitten', next: null }
    } else {
      let currentNode = head;
      /*
      Node {
        element: 'Kitten',
        next: Node { element: 'Puppy',
            next: Node { element: 'Dog', next: [Node] }
            }
        }
      */
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node; // head.next
    }
    length++;
  };

  //remove
  this.remove = function (element) {
    var currentNode = head; // kitten, puppy, dog, cat ...
    var previousNode;
    // this is if element is "kitten"
    if (currentNode.element === element) {
      console.log("head removed");
      head = currentNode.next; //head => puppy, dog, cat ....
    } else {
      while (currentNode.element !== element) {
        //if remove 'puppy'
        previousNode = currentNode; //the head => kitten, puppy, dog, cat
        currentNode = currentNode.next; //puppy, so breakout of loop
        console.log("none head removed");
      }
      //so then Puppy = Dog, puppy got replaced with dog
      previousNode.next = currentNode.next;
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
    let node = new Node(element); // fox

    let currentNode = head; //kitten, puppy, dog, cat ,fish
    let previousNode;
    let currentIndex = 0;

    if (index > length) {
      return false;
    }

    if (index === 0) {
      node.next = currentNode; //kitten, puppy, dog, cat ,fish
      head = node; // fox
    } else {
      while (currentIndex < index) { //idx 1 idx 2
        currentIndex++; //1 //2
        previousNode = currentNode; //kitten ... //puppy ...
        currentNode = currentNode.next; // puppy, dog, cat ,fish
        //dog, cat ,fish
      }
      node.next = currentNode;  //fox, puppy dog, cat ,fish
      //fox, dog, cat ,fish
      previousNode.next = node; // kitten, fox, puppy, dog, cat ,fish
      //kitten, puppy, fox, dog, cat ,fish
    }
    length++;
  };

  this.removeAt = function (index) {
    let currentNode = head; //kitten,  
    let previousNode;
    let currentIndex = 0;
    if (index < 0 || index >= length) {
      return null;
    }
    if (index === 0) {
      head = currentNode.next;
    } else {
      while (currentIndex < index) { //idx 1 (puppy)
        currentIndex++;
        previousNode = currentNode;  //kitten,   
        currentNode = currentNode.next; //puppy,  dog, cat ,fish
      }
      previousNode.next = currentNode.next; // puppy gets replaced by  dog
    }
    length--;
    return currentNode.element;
  };
}

var conga = new LinkedList();

conga.add("Kitten");
conga.add("Puppy");
conga.add("Dog");
conga.add("Cat");
conga.add("Fish");
conga.remove("Puppy");

// console.log(conga.size());
// console.log(conga.removeAt(3));
// console.log(conga.elementAt(3));
// console.log(conga.indexOf("Puppy"));

//console.log(conga.head());

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    // console.log("this??->", this);
    return this;
  }
  //array is empty..
  depthFirstSearch(array) {
    array.push(this.name);
    for (const child of this.children) {  
      //this.children is an array, child is an element 
      // Node { name: 'I', children: [] } <- child
      console.log("child->", child);
      child.depthFirstSearch(array);
    }
    return array;
  }
}

const graph = new Node("A");
//console.log("graph->", graph);
graph.addChild("B").addChild("C").addChild("D");
//console.log("graph->", graph);
graph.children[0].addChild("E").addChild("F");
//console.log("graph->", graph.children[0]);
graph.children[2].addChild("G").addChild("H");
graph.children[0].children[1].addChild("I").addChild("J"); //F
//console.log("graph-->", graph.children[0].children[1]);
graph.children[2].children[0].addChild("K");
console.log("return-->", graph.depthFirstSearch([]));
// -> ["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]

// const test = {
//   graph: {
//     nodes: [
//       { children: ["B", "C"], id: "A", value: "A" },
//       { children: ["D"], id: "B", value: "B" },
//       { children: [], id: "C", value: "C" },
//       { children: [], id: "D", value: "D" },
//     ],
//     startNode: "A",
//   },
// };
//["A", "B", "D", "C"]

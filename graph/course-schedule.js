let visiting; // is being explored
let visited; // is already explored
let graph;

var canFinish = function (numCourses, prerequisites) {
  graph = new Map();
  visiting = new Set();
  visited = new Set();

  for (let [v, e] of prerequisites) {
    if (graph.has(v)) {
      console.log("hellooo??");
      let edges = graph.get(v);
      edges.push(e);
      graph.set(v, edges);
    } else {
      graph.set(v, [e]);
    }
  }

  for (const [v, e] of graph) {
    console.log(graph, v);
    if (DFS(v)) {
      return false; //if cyclic it will not finish so it is false
    }
  }

  return true;
};

//helper function
var DFS = function (v) {
  visiting.add(v);
  let edges = graph.get(v); // get all the edges to explore

  if (edges) {
    //console.log(edges)
    for (let e of edges) {
      if (visited.has(e)) {
        //skip if it is explored already
        continue;
      }

      if (visiting.has(e)) {
        //found e is being explored
        return true;
      }

      if (DFS(e)) {
        // DFS deeper if this e is cyclic
        return true;
      }
    }
  }

  visiting.delete(v); // remove from visiting set when all decedant v are visited
  visited.add(v);
  return false;
};

/* 
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.
*/
let numCourses = 2;
let prerequisites = [[1, 0]];

/*
Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.*/

let test = canFinish(numCourses, prerequisites);
console.log(canFinish(numCourses, prerequisites));

// let obj = new Map();
// obj.set(1, [0]);
// for (const [v, e] of obj) {
//   console.log("hello?", v, e);
// }

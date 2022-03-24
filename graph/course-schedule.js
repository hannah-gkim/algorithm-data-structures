let visiting; // is being explored
let visited; // is already explored
let graph;
//to take course 1 need to take 0 first, so 1 cannot be prereq for 0
var canFinish = function (numCourses, prerequisites) {
  // [[1,0],[0,1], [1,2]]
  graph = new Map();
  visiting = new Set();
  visited = new Set();

  for (let [v, e] of prerequisites) { // [1,0]   [0,1]  [1,2]
    if (graph.has(v)) { 
      console.log("hellooo??");
      let edges = graph.get(v); // [0]
      edges.push(e); // [0,2]
      graph.set(v, edges);
    } else {
      graph.set(v, [e]); // { 1: [0,2], 0 : [1]}
    }
  }

  for (const [v, e] of graph) {
    // { 1: [0,2], 0 : [1]}
    if (DFS(v)) { //1
      return false; //if cyclic it will not finish so it is false
    }
  }
  // console.log(visited);
  return true;
};

//helper function
var DFS = function (v) {
  visiting.add(v); // {1, 0}

  let edges = graph.get(v); // [0,2] // [1]
  if (edges) {
    for (let e of edges) { // 0 2 //1
      if (visited.has(e)) {
        //skip if it is explored already
        continue;
      }

      if (visiting.has(e)) {
        // 
        return true;
      }

      if (DFS(e)) { // 0
        return true;
      }
    }
  }
  visiting.delete(v); // {   }
  visited.add(v); // { }
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

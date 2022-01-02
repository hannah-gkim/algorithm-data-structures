//dept first uss stack
//iterative approach
const depthFirstPrint = (graph, source) => {
  const stack = [source]; //
  const depthfirst = [];
  while (stack.length > 0) {
    const current = stack.pop();
    depthfirst.push(current);
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
  return depthfirst;
};

/*
//recursive
const depthFirstPrint = (graph, source, depthfirst = []) => {
  //   let depthfirst = [];
  depthfirst.push(source);
  for (let neighbor of graph[source]) {
    //when [] don't make recursive calls
    depthFirstPrint(graph, neighbor, depthfirst);
  }
  return depthfirst;
};
*/

const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

depthFirstPrint(graph, "a"); //abdfce or //acebdf
console.log(depthFirstPrint(graph, "a"));

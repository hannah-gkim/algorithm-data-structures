//breadtg first uses queue
const breadthFirstPrint = (graph, source) => {
  const queue = [source]; 
  const breadthFirst = [];
  while (queue.length > 0) {
    const current = queue.shift();
    breadthFirst.push(current);
    for (let neighbor of graph[current]) { 
      queue.push(neighbor);
    }
  }
  return breadthFirst;
};

const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

// breadthFirstPrint(graph, "a");
console.log(breadthFirstPrint(graph, "a"));

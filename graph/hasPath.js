//depth first recursive way
const hasPathDepth = (graph, src, dst) => {
  if (src === dst) return true;
  for (let neighbor of graph[src]) {
      //as long as  graph[src or neighbor] has something to loop?
    if (hasPathDepth(graph, neighbor, dst) === true) {
      console.log(neighbor);
      return true;
    }
  }
  return false;
};

//breadth first
const hasPathBreadth = (graph, src, dst) => {
  // graph 'f' 'k'
  const queue = [src]; // h

  while (queue.length > 0) {
    const current = queue.shift(); //k

    if (current == dst) return true;

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return false;
};

let graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

// true f -> i -> k
console.log("depth:", hasPathDepth(graph, "f", "k"));
console.log("breadth:", hasPathBreadth(graph, "f", "k"));

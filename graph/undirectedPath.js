//function should return a boolean indicating whether or not there exists a path between nodeA and nodeB

//time O(e) space O(n)
//recursive
//new Set() is O(1) time
const undirectedPathDepth = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  return hasPath(graph, nodeA, nodeB, new Set());
};

const hasPath = (graph, src, dst, visited) => {
  if (src === dst) return true;
  if (visited.has(src)) return false;
  visited.add(src);
  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited) === true) return true;
  }
  return false;
};

//time O(e) space O(n)
// const undirectedPathBreadth = (edges, nodeA, nodeB) => {};

//helper function (adjacency list)
const buildGraph = (edges) => {
  const graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];
/*
{
  i: [ 'j', 'k' ],
  j: [ 'i' ],
  k: [ 'i', 'm', 'l' ],
  m: [ 'k' ],
  l: [ 'k' ],
  o: [ 'n' ],
  n: [ 'o' ]
}
*/

// true
console.log(undirectedPathDepth(edges, "j", "m"));
// undirectedPathBreadth(edges, "j", "m");

const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

function depthFirstPrint(graph, src) {
  let queue = [src];
  let output = [src];

  while (queue.length > 0) {
    const current = queue.pop();
    queue = [...graph[current], ...queue];
    output = [...output, ...graph[current]];
  }

  return output;
}


depthFirstPrint(graph, 'a');

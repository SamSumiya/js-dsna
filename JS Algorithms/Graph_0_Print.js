const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};


// DFT solution
function depthFirstPrint(graph, el) {
  let stack = [el];
  let output = [];

  while (stack.length > 0) {
    const current = stack.pop();
    output.push(current);
    stack = [...stack, ...graph[current]];
  }
  return output;
}

depthFirstPrint(graph, 'a');
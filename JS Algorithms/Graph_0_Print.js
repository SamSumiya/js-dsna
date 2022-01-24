const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};


// DFT Iterative solution
// function depthFirstPrint(graph, el) {
//   let stack = [el];
//   let output = [];

//   while (stack.length > 0) {
//     const current = stack.pop();
//     output.push(current);
//     stack = [...stack, ...graph[current]];
//   }
//   return output;
// }

// DFT Recursive solution
function depthFirstPrint(graph, src) {

  console.log(src)

  for (let neighbor of graph[src]) {
    depthFirstPrint(graph, neighbor)
  }

}

// DFT Recursive Solution





depthFirstPrint(graph, 'a');
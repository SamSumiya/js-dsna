const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: [],
};

const hasPath = (graph, src, dst) => {
  if (src === dst) return true;
  // if (src === dst) return true
  for (let neighbor of graph[src]) {
    //        if (src === dst) return true
    // if (src === dst) return true
    if (hasPath(graph, neighbor, dst) === true) {
      return true;
    }
  }
  return false;
};

// Breadth First Traversal
// function hasPath(graph, src, dst) {

//   let queue = [src]

//   while(queue.length > 0) {
//     const current = queue.pop()
//     if (current === dst) return true
//     for (let neighbor of graph[current]) {
//       // if (neighbor === dst) return true
//       queue.unshift(neighbor)
//     }
//   }
//   return false
// }

// const hasPath = (graph, src, dst) => {

//   let stack = [src]

//   while(stack.length > 0) {

//     const current = stack.pop()
//     if (current === dst) return true
//     stack = [...stack, ...graph[current]]

//   }

//   return false
// };

hasPath(graph, 'f', 'k'); // true

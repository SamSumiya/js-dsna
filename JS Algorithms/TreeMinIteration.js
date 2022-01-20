const treeMinValue = (root) => {
  let min = Infinity;
  const queue = [root];

  while (queue.length > 0) {
    const currentNode = queue.pop();
    if (currentNode.val < min) min = currentNode.val;

    if (currentNode.left) queue.unshift(currentNode.left);
    if (currentNode.right) queue.unshift(currentNode.right);
  }

  return min;
};

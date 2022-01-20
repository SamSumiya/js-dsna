class Node {
  constructor(input) {
    this.input = input;
    this.left = null;
    this.right = null;
  }
}

class BinaryTreeSearch {
  constructor() {
    this.root = null;
  }

  insert(input) {
    let node = new Node(input);
    if (this.root == null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  //     insertNode(root, newNode) {
  //         if(root.input > newNode.input) {
  //             if (root.left == null) {
  //                 root.left = newNode
  //             } else {
  //                 this.insertNode(root.left, newNode)
  //             }
  //         } else if (root.input < newNode.input) {
  //             if (root.right == null) {
  //                 root.right = newNode
  //             } else  {
  //                 this.insertNode(root.right, newNode)
  //             }
  //         }
  //     }

  insertNode(root, newNode) {
    if (newNode.input < root.input) {
      if (root.left == null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else if (newNode.input > root.input) {
      if (root.right == null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  getRoot() {
    return this.root;
  }

  inorder(root) {
    if (root) {
      this.inorder(root.left);
      console.log(root.input);
      this.inorder(root.right);
    }
  }
}

const bts = new BinaryTreeSearch();
bts.insert(3);
bts.insert(5);
bts.insert(1);
bts.insert(6);
bts.insert(4);

console.log(bts, 'bts');

const rr = bts.getRoot();

bts.inorder(rr);

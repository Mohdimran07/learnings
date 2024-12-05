class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertItr(value) {
    this.root = this.insertRecursive(value, this.root); // recursive approach;

    // if (this.root === null) {
    //   this.root = newNode;
    //   return this;
    // }

    // let currentNode = this.root;
    // while (currentNode) {
    //   if (value === currentNode.value) return undefined;
    //   if (value > currentNode.value) {
    //     // GO RIGHT
    //     if (currentNode.right === null) {
    //       currentNode.right = newNode;
    //       return this;
    //     }
    //     currentNode = currentNode.right;
    //   } else {
    //     // GO LEFT
    //     if (currentNode.left === null) {
    //       currentNode.left = newNode;
    //       return this;
    //     }
    //     currentNode = currentNode.left;
    //   }
    // }
  }

  insertRecursive(value, node) {
    if (node === null) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this.insertRecursive(value, node.left);
    } else if (value > node.value) {
      node.right = this.insertRecursive(value, node.right);
    }

    return node;
  }

  findValue(val) {
    return this._find(this.root, val);

    // if(!this.root) return false

    // let current = this.root
    // let found = false
    // while(current && !found){
    //       if(value < current.value){
    //         current = current.left
    //        } else if(value > current.value){
    //           current = current.right
    //        } else {
    //             found = current
    //        }

    //       }

    //   if(!found) return undefined;
    //   return found
  }

  _find(node, val) {
    if (node === null) return null;

    if (node.value === val) return node;

    if (val < node.value) {
      return this._find(node.left, val);
    } else {
      return this._find(node.right, val);
    }
  }

  preOrder() {
    this._preOrder(this.root);
  }

  _preOrder(node) {
    if (node === null) return;

    this._preOrder(node.left);
    this._preOrder(node.right);
    console.log(node.value);
  }
}

// Example usage:
const bst = new BinarySearchTree();
// let bst = new BinarySearchTree();
// bst.insert(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(3);
// bst.insert(7);
bst.insertItr(3);
bst.insertItr(2);
bst.insertItr(5);
bst.insertItr(1);
bst.insertItr(8);
bst.insertItr(9);
bst.insertItr(5);
bst.insertItr(7);

// bst.inorder(); // Output: 3, 5, 7, 10, 15

let array = [7, 8, 1, 3, 2, 5, 10, 4];
// for (let arr of array) {
//   bst.insertItr(arr);
// }
console.log(bst);
bst.preOrder();

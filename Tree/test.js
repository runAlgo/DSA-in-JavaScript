class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
   this.root = null; 
  }
  insert(value) {
    const newNode = new Node(value);
    if(!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;

    while(true) {
      if(value < current.value) {
        if(current.left === null) {
          current.left = newNode;
          return this;
        } 
        current = current.left;
      }
      else if(value > current.value) {
        if(current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
      else {
        // Handle the duplicate value
        return this;
      }
      }
    }
  includes(value) {
    if(!this.root) return false;
    
    let temp = this.root;

    while(temp) {
      if(value < temp.value) {
        temp = temp.left;
      } else if(value > temp.value) {
        temp = temp.right;
      } else if(value === temp.value) {
        return true;
      }
    }
    return false;
  }
  }


const newBST = new BST();
newBST.insert(4);
newBST.insert(1);
newBST.insert(9);
newBST.insert(5);
newBST.insert(2);
newBST.insert(5);

console.log(newBST.includes(1));
console.log(newBST);

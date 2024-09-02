// This is our Node

class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

// This is our linkedList

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  pop() {
    if (!this.head) return undefined;

    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }
  unshift(value) {
    // Add a new Node/Element at the head.
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) return undefined;

    // 1. Point the first Node.
    let temp = this.head;

    // 2. Move the head to the next Node.
    this.head = this.head.next;

    // 3. Remove first element
    temp.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return temp;
  }
  getFirstEle() {
    return this.head;
  }
  getLastNode() {
    if (!this.head) return undefined;
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    return temp;
  }
  get(index) {
    let count = 0;
    let temp = this.head;
    
    while(temp) {
      if(count === index) {
        return temp;
      }
      count++;
      temp = temp.next;
    }
    return null;
  }

  set(index, ele) {
    let temp = this.get(index);

    if(temp) {
      temp.value = ele;
      return true;
    }
    return false;
  }

  // insert(index, ele) {
  //  if(!this.head) {
  //   if(index === 1) {
  //     return new Node(ele);
  //   }else {
  //     return this.head;
  //   } 
  //  }
  //  if(index === 1) {
  //   let newNode = new Node(ele);
  //   newNode.next = this.head;
  //   return newNode;
  //  }

  //  let cnt = 0;
  //  let temp = this.head;
  //  while(temp) {
  //   cnt++;
  //   if(cnt === (index - 1)) {
  //     let newNode = new Node(ele);
  //     newNode.next = temp.next;
  //     temp.next = newNode;
  //     this.length++;
  //     break;
  //   }
  //   temp = temp.next;
  //  }
  //  return this.head;
  // }

  insertAtIndexN(index, value) {
    if(index === 0) {
      return this.unshift(value);
    }

    if(index === this.length) {
      return this.push(value);
    }

    const newNode = new Node(value);

    const temp = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;

    this.length++;
    return true;
  }

  size() {
    let count = 0;
    let temp = this.head;
    while(temp) {
      count++;
      temp = temp.next;
    }
    return count;
  }
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

const myLinkedList = new LinkedList(0);
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);

// myLinkedList.pop();
// myLinkedList.unshift(10).unshift(20);

// console.log("This is removed node: ", myLinkedList.shift());
// console.log("This is first Node:", myLinkedList.getFirstEle());
// console.log("This is last Node:", myLinkedList.getLastNode());
// console.log(myLinkedList.get(2));
console.log(myLinkedList.set(0, "don"));
console.log(myLinkedList.insertAtIndexN(1, 8));
console.log(myLinkedList)
console.log(myLinkedList.size())
myLinkedList.clear();
console.log(myLinkedList)

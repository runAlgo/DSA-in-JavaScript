class Node {
  constructor(head) {
    this.head = head;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = new Node(head);
    this.tail = this.head;
    this.length = 1;
  }

  push(head) {
    const newNode = new Node(head);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return true;
  }

  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  // Add a new node/element at the head
  unshift(head) {
    const newNode = new Node(head);
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

  //   Remove first Node/Element from the linkedList
  shift() {
    if (!this.head) return undefined;
    const temp = this.head;
    this.head = this.head.next;

    temp.next = null;
    this.length--;

    if (this.length == 0) {
      this.tail = null;
    }
    return temp;
  }

  get(index) {
    let temp = this.head;
    let count = 0;

    while (temp) {
      if (count === index) return temp;
      count++;
      temp = temp.next;
    }
    return null;
  }

  // Finds the node at the given index
  // Changes that node's stored head to the new head
  // Returns true if successful

  set(index, head) {
    // If index is invalid, return false
    if (index < 0 || index >= this.length) return false;

    // Get the node at the given index;
    let temp = this.get(index);

    // if node exists, update its head
    if (temp) {
      temp.head = head;
      return true;
    }

    // If node doesn't exist
    return false;
  }

  // It add the new node on the given index to the linked-list
  insertAtIndex(index, head) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(head);
    if (index === this.length) return this.push(head);

    const newNode = new Node(head);
    let temp = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;

    return true;
  }
  size() {
    if(!this.head) return 0;
    let count = 0;
    let temp = this.head;
    while(temp) {
      count++;
      temp = temp.next;
    }
    return count;
  }
}

const MyLinkendList = new LinkedList(4);
MyLinkendList.push(5);
MyLinkendList.push(3);
MyLinkendList.push(9);

// MyLinkendList.pop();
// MyLinkendList.push(6);
// console.log("This is Popped head: ", MyLinkendList.pop());
// const res = MyLinkendList.unshift(8);
// const res = MyLinkendList.get(2)
// const res = MyLinkendList.set(0, 8)
// const res = MyLinkendList.insertAtIndex(2, 7);
const res = MyLinkendList.size();
console.log(res);
console.log(MyLinkendList);

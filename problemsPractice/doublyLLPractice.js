class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this; // ✅ prevent double linking
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined; // ✅ fixed

    let count = 0;
    let temp = this.head;
    while (temp) {
      if (count === index) return temp;
      count++;
      temp = temp.next;
    }
    return undefined;
  }

  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.value = value; // ✅ fixed property
      return true;
    }
    return false;
  }

  insertNewNodeAtNIndex(index, value) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const newNode = new Node(value);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;

    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return true;
  }
}

const MyLinkedList = new LinkedList(3);
MyLinkedList.push(5);
MyLinkedList.push(20);
MyLinkedList.push(10);
MyLinkedList.unshift(4);

MyLinkedList.insertNewNodeAtNIndex(2, 99); // ✅ correct call

console.log("List Values:");
let temp = MyLinkedList.head;
while (temp) {
  console.log(temp.value);
  temp = temp.next;
}

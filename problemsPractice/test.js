class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
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
  unshift(value) {
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


//   Remove first Node/Element from the linkedList
  shift() {
    if(!this.head) return undefined;
    const temp = this.head;
    this.head = this.head.next;

    temp.next = null;
    this.length--;

    if(this.length == 0) {
        this.tail = null;
    }
    return temp;
  }

  get(index) {
    let temp = this.head;
    let count = 0;


    while(temp) {
        if(count == index) return temp;
        count++;
        temp = temp.next;
    }
    return null;
  }

  set(index, value) {
   // If index is invalid, return false
   if(index < 0 || index >= this.length) return false;

   // Get the node at the given index;
   let temp = this.get(index);

   // if node exists, update its value
   if(temp) {
    temp.head = value;
    return true;
   }

   // If node doesn't exist
   return false;
  }
}

const MyLinkendList = new LinkedList(4);
MyLinkendList.push(5);
MyLinkendList.push(3);
MyLinkendList.push(9);

// MyLinkendList.pop();
// MyLinkendList.push(6);
// console.log("This is Popped value: ", MyLinkendList.pop());
// const res = MyLinkendList.unshift(8);
// const res = MyLinkendList.get(3)
const res = MyLinkendList.set(0, 8)
console.log(res);
console.log(MyLinkendList)



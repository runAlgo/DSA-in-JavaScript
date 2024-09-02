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

  insert(index, value) {
   if(index === 0) {
    return this.unshift(value);
   }

    if (index === this.length) {
      return this.push(value);
    }

   let newNode = new Node(value);
   const temp = this.get(index - 1);

   newNode.next = temp.next;
   temp.next = newNode;
  
   this.length++;
   return true;
  }
  size() {
    let temp = this.head;
    let count = 0;
    while(temp) {
        count++;
        temp = temp.next;
    }
    return count;
  }
  clear() {
    this.head = null
    this.tail = null
    this.length = 0;
    return true;
  }
}

const myLinkedList = new LinkedList(4);
myLinkedList.push(5);
myLinkedList.push(7);
myLinkedList.get(2);
myLinkedList.insert(3, 3);
console.log(myLinkedList);
console.log("Size of my linked list is: ",myLinkedList.size());
myLinkedList.clear();
console.log(myLinkedList);





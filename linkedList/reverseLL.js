class Node {
  constructor(value) {
    this.value = value;
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
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }

    this.length++;
  }

  reverseLL() {
    let prev = null;
    let curr = this.head;
    this.tail = this.head; // After reversing, old head becomes tail

    while(curr !== null) {
        let next = curr.next; // 1) save next
        curr.next = prev;     // 2) reverse pointer
        prev = curr;          // 3) move prev 
        curr = next;          // 4) move curr
    }

    this.head = prev;         // new head
  }
}

const MyLinkedList = new LinkedList(3);
MyLinkedList.push(5);
MyLinkedList.push(9);
console.log("Berfore Reverse:")
console.log(MyLinkedList);
MyLinkedList.reverseLL();
console.log("After Reverse:");
console.log(MyLinkedList);

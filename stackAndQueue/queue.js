class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.length = 0; // Initialize length to 0
    }
  
    enqueue(value) {
      const newNode = new Node(value);
      if(this.length === 0) {
        this.first = newNode;
        this.last = newNode;
      }
      this.last.next = newNode;
      this.last = newNode;
      this.length++;
      return this;
    }
  


    dequeue() {
      const temp = this.first;

      if(this.length === 0) return undefined;

      if(this.length === 1) {
        this.first = null;
        this.last = null;
      }

      this.first = this.first.next;
      temp.next = null;
      this.length--;
      return temp;
     }

    min() {
      if(this.length === 0) return undefined;

      let current = this.first;
      let minValue = current.value;

      while(current.next) {
        current = current.next;

        if(current.value < minValue) {
          console.log(current.value, minValue);
          minValue = current.value;
        }
      }
      return minValue;
    }
  }
  
  const myQueue = new Queue(); // Use constructor without argument
  myQueue.enqueue(2);
  myQueue.enqueue(5);
  myQueue.enqueue(1);
  myQueue.enqueue(6);
  // console.log("This node is dequed: ", myQueue.dequeue());
  console.log(myQueue.min());

  // console.log(myQueue); // Output: Queue { first: Node { value: 4, next: Node { value: 5, next: null } }, last: Node { value: 5, next: null }, length: 2 }
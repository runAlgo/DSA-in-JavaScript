class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class doublyLL {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
    push(value) {
        const newNode = new Node(value);
        if(!this.head)  {
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
        return this;
    }
    pop() {
        if(this.length === 0) return undefined;

        let temp = this.tail;

        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }

      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
      this.length--;
      return temp;
    }
    unshift(value) {
       const newNode = new Node(value);

       if(this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
       }

       newNode.next = this.head;
       this.head.prev = newNode;
       this.head = newNode;
       this.length++;
       return this;
    }
    // Remove the first element the linked List.
    shift() {
        if(this.length === 0) return undefined;
        
        let temp = this.head;

        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }

        this.head = this.head.next;
        this.head.prev = null;
        temp.next = null;
        this.length--;
        return temp;
    }
    reverseLL() {
        // let temp = this.head;
        // this.head = this.tail;
        // this.tail = temp;

        // let next = temp;
        // let prev = null;

        // for(let i = 0; i < this.length; i++) {
        //     next = temp.next;
        //     temp.next = prev;
        //     prev = temp;
        //     temp = next;
        // }


        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let next = temp;
        let prev = null;

        for(let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
    }
}

const myDLL = new doublyLL(4)
myDLL.push(5);
myDLL.push(7);
myDLL.push(22);

myDLL.pop();
myDLL.unshift(10);
myDLL.shift();
myDLL.reverseLL();
console.log(myDLL)


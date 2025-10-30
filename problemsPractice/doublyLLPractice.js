class Node {
    constructor(value) {
        this.head = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
        return this;
    }
    pop() {
        if(!this.head) return undefined; // Empty list -> nothing to pop
        
        let temp = this.tail; // Save the last node to return later

        if(this.length === 1) { // If only one node
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev; // Move tail one step back
            this.tail.next = null;  // Disconnect old last node
            temp.prev = null; // Disconnect the popped node completely
        }
        this.length--;
        return temp; // Return the popped node
    }
    unshift(value) {
        const newNode = new Node(value);
        if(this.length == 0) {
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
        if(!this.head) return undefined;

        let temp = this.head;

        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
        return temp; // Return romoved node
    }
}

const MyLinkedList = new LinkedList(3);
MyLinkedList.push(5)
// MyLinkedList.pop();
MyLinkedList.unshift(4);
MyLinkedList.shift();
console.log(MyLinkedList)
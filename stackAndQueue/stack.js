class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        const newNode = new Node(value);
        this.first = newNode;
        this.length = 1;
    }
    push(value) {
        const newNode = new Node(value);


        if(this.length === 0) {
            this.first = newNode;
        }
        
        newNode.next = this.first;
        this.first = newNode;
        this.length++;
        return this;
    }
    pop() {

        if(!this.length === 0) {
            return null;
        }

        const remove = this.first;
        this.first = this.first.next;
        remove.next = null;
        this.length--; 
        return remove;

    }
}

let theStack = new Stack(6);
theStack.push(4);
theStack.push(8);
theStack.pop();


console.log(theStack)
// Linked List

// Singly LinkedList
// Push(Challenge)
// Pop (Challenge)
// Unshift (Challenge)
// Shift (Challenge)
// GetLast (Challenge)
// Set (Challenge)
// Insert (Challenge)
// Size (Challenge)
// Clear (Challenge)


// class Node {
//     constructor(value) {
//         this.head = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor(value) {
//         this.head = new Node(value);
//         this.tail = this.head;
//         this.length = 1;
//     }

//     push(value){
//         const newNode = new Node(value);
//         if(!this.head) {
//             this.head = newNode;
//             this.tail = this.head;
//         }
//         else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//             this.length++;
//         }
//     }

//     pop() {
//         if(!this.head) {
//             return undefined;
//         }
//         if(this.length === 0) {
//             this.head = null;
//             this.tail = null;
//         }

//         let temp = this.head;
//         let prev = this.head;

//         while(temp.next) {
//             prev = temp;
//             temp = prev.next;
//         }

//         this.tail = prev;
//         this.tail.next = null;
//         this.length--;

//         return temp;
//     }

//     unshift(value) {
//         const newNode = new Node(value);
//         if(!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//         }

//         newNode.next = this.head;
//         this.head = newNode;
//         this.length++;

//         return this;
//     }
// }


// const myLinkedList = new LinkedList(1);
// myLinkedList.push(5)
// myLinkedList.push(45)
// myLinkedList.push(59)
// myLinkedList.unshift(88)

// myLinkedList.pop();
// console.log(myLinkedList)



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
    // Push new value to the linked List
    push(value) {
        const newNode = new Node(value)
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }

        const temp = this.tail;   // 4 -> 5 -> 2 -> 8
        temp.next = newNode;

        this.tail = newNode;
        this.length++;

    }

    // Pop one last value from the linked list
    pop() {
        if(!this.head) return undefined;
        // 4 -> 5 -> 2 -> 8
        let temp = this.head;
        let prev = null;
        while(temp.next.next) {
            prev = temp;
            temp = temp.next;
        }

        temp.next = null;
        this.tail = temp;
        this.length--;
    }
    // Insert new Node to the n'th position of linked List

}

const myLinkedList = new LinkedList(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(9);
myLinkedList.pop()
myLinkedList.pop()
console.log(myLinkedList)

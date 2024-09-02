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

    while (temp) {
      if (count === index) {
        return temp;
      }
      count++;
      temp = temp.next;
    }
    return null;
  }
  set(index, ele) {
    let temp = this.get(index);

    if (temp) {
      temp.value = ele;
      return true;
    }
    return false;
  }
}

const List = new LinkedList(4);
List.push(5);
List.push(6);
List.push(9);

// console.log(List.get(2))
console.log(List.set(0, "kalu"));
console.log(List);

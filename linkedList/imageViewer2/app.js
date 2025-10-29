class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.current = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  moveNext() {
    if (this.current && this.current.next) {
      this.current = this.current.next;
    }
  }
  movePrev() {
    if (this.current && this.current.prev) {
      this.current = this.current.prev;
    }
  }

  getCurrentData() {
    return this.current ? this.current.data : null;
  }
}

const imageList = new LinkedList();

imageList.append("https://images.pexels.com/photos/8462116/pexels-photo-8462116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
imageList.append("https://images.pexels.com/photos/28082020/pexels-photo-28082020/free-photo-of-man-standing-in-green-jacket.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load");
imageList.append("https://images.pexels.com/photos/20821498/pexels-photo-20821498/free-photo-of-a-cake-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load");
imageList.append("https://images.pexels.com/photos/27501815/pexels-photo-27501815/free-photo-of-a-river-flowing-through-a-forested-area.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load");
imageList.append("https://images.pexels.com/photos/27854288/pexels-photo-27854288/free-photo-of-a-woman-is-sitting-on-a-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");

const image = document.getElementById("image");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

image.src = imageList.getCurrentData();

prevBtn.addEventListener("click", () => {
  imageList.movePrev();
  image.src = imageList.getCurrentData();
});

nextBtn.addEventListener("click", () => {
  imageList.moveNext();
  image.src = imageList.getCurrentData();
});

class ListNode {
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
        const newNode = new ListNode(data);
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

// Initialize the linked list
const imageList = new LinkedList();
imageList.append('https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=400')
imageList.append('https://images.pexels.com/photos/3221163/pexels-photo-3221163.jpeg?auto=compress&cs=tinysrgb&w=400')
imageList.append('https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=400')
imageList.append('https://images.pexels.com/photos/9622559/pexels-photo-9622559.jpeg?auto=compress&cs=tinysrgb&w=400')
imageList.append('https://images.pexels.com/photos/20534678/pexels-photo-20534678/free-photo-of-rear-axis-of-the-lamborghini-huracan.jpeg?auto=compress&cs=tinysrgb&w=400')
imageList.append('https://images.pexels.com/photos/4635344/pexels-photo-4635344.jpeg?auto=compress&cs=tinysrgb&w=400')
imageList.append('https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=400')
imageList.append('https://images.pexels.com/photos/39501/lamborghini-brno-racing-car-automobiles-39501.jpeg?auto=compress&cs=tinysrgb&w=400')
imageList.append('https://images.pexels.com/photos/39855/lamborghini-brno-racing-car-automobiles-39855.jpeg?auto=compress&cs=tinysrgb&w=400')
imageList.append('https://images.pexels.com/photos/17377911/pexels-photo-17377911/free-photo-of-super-car-wallpaper.jpeg?auto=compress&cs=tinysrgb&w=400')
imageList.append('https://images.pexels.com/photos/11963311/pexels-photo-11963311.jpeg?auto=compress&cs=tinysrgb&w=400')
imageList.append('https://images.pexels.com/photos/10292241/pexels-photo-10292241.jpeg?auto=compress&cs=tinysrgb&w=400')
imageList.append('https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=400')
imageList.append('https://images.pexels.com/photos/27124091/pexels-photo-27124091/free-photo-of-mercedes-benz-on-display.jpeg?auto=compress&cs=tinysrgb&w=400')
imageList.append('https://images.pexels.com/photos/27090808/pexels-photo-27090808/free-photo-of-classic-mercedes-benz.jpeg?auto=compress&cs=tinysrgb&w=400')



// Set up the image viewer
const imageElement = document.getElementById('image');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Display the first image
imageElement.src = imageList.getCurrentData();

prevBtn.addEventListener('click', () => {
    imageList.movePrev();
    imageElement.src = imageList.getCurrentData();
});

nextBtn.addEventListener('click', () => {
    imageList.moveNext();
    imageElement.src = imageList.getCurrentData();
});
// Node class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// LinkedList class
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Method to add a node to the list
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

    // Method to get the node at a specific index
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let current = this.head;
        let counter = 0;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
}

// Create an instance of LinkedList
const imageList = new LinkedList();

// Add image URLs to the linked list
const imageUrls = [
    "../linkedList/images/adidas.png",
    "../linkedList/images/nike.png",
    "../linkedList/images/apple.png",
    "../linkedList/images/uber.png"
];

imageUrls.forEach(url => imageList.push(url));

// Variables to keep track of the current image index
let currentIndex = 0;

// Function to update the image source
function updateImage() {
    const imgElement = document.getElementById("image");
    const currentNode = imageList.get(currentIndex);
    if (currentNode) {
        imgElement.src = currentNode.value;
    }
}

// Event listeners for buttons
document.getElementById("prev").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();
    }
});

document.getElementById("next").addEventListener("click", () => {
    if (currentIndex < imageList.length - 1) {
        currentIndex++;
        updateImage();
    }
});

// Initialize the image viewer
updateImage();

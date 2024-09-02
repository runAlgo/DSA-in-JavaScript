// Custom Array
class MyArray {

    constructor() {
        this.length = 0;
        this.data = {};
    }
    
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    get(index) {
        return this.data[index];
    }

    pop() {
        const last = this.data[this.length - 1];
        delete this.data[this.length - 1]
        this.length--;
        return last;
    }

   sift() {
    const firstItem = this.data[0];
    for(let i = 0; i < this.length; i++) {
        this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
   }

   deleteNum(index) {

    const item = this.data[index];
    for(let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
}
}
const myNewArray = new MyArray();
myNewArray.push("kalu");
myNewArray.push("344");
myNewArray.push("Blue");
myNewArray.push("Pubg");
myNewArray.push("Sonu");
// console.log(myNewArray.get(4));
// console.log(myNewArray.pop());
// console.log(myNewArray);
// console.log(myNewArray.sift())
console.log(myNewArray.deleteNum(0));
console.log(myNewArray);








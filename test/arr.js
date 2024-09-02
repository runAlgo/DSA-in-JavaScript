class myNewArr {
    constructor() {
        this.length = 0;
        this.data = {}
    }

    push(val) {
        this.data[this.length] = val;
        this.length++;
        return this.length;
    }

  delete(index) {
    //    [1] 
    // [1, 2, 3, 4, 5]
    //
    const deleteItem = this.data[index];
    for(let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return deleteItem;
  }

}
const newArray = new myNewArr();
newArray.push("kalu");
newArray.push("lulu");
newArray.push("babu");
console.log(newArray);
console.log(newArray.delete(1));
console.log(newArray);




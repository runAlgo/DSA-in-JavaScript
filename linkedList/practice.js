// This is our Node
class Person {
    constructor(data) {
        this.person = data;
        this.nextPerson = null;
    }
}

// This is our linkedList
class personsLine {
    constructor() {
        this.person = null;
        this.lastPerson = null;
        this.length = 0;
    }

    push(data) {
        let newPerson = new Person(data);

        if(!this.person) {
            this.person = newPerson;
            this.lastPerson = newPerson;
        } else {
            this.lastPerson.nextPerson = newPerson;
            this.lastPerson = newPerson;
        }
        this.length++;
    }
    pop() {
        if(!this.person) return undefined;
        let temp = this.person;
        let prev = temp;

        while(temp.nextPerson) {
            prev = temp;
            temp = prev.nextPerson;
        }

        this.lastPerson = prev;
        this.lastPerson.nextPerson = null;
        this.length--;

        if(this.length == 0) {
            this.person = null;
            this.lastPerson = null;
        }
        return temp;
    }
}

const newPersonLine = new personsLine(null);
newPersonLine.push("Kalu");
newPersonLine.push("Anil");
newPersonLine.push("John");
newPersonLine.push("Jack");
newPersonLine.push("queen");

console.log(newPersonLine.pop());
console.log(newPersonLine);
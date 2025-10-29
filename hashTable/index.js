class HashTable {
    constructor(size = 5) {
        this.keyMap = new Array(size);
    }

    _hashFunction(key) {
        let sum = 0

        const PRIME_NUMBER = 31

        for(let i = 0; i < Math.min(key.length, 100); i++) {
            const charCode = key.charCodeAt(0) - 96;
            sum = (sum * PRIME_NUMBER * charCode) % this.keyMap.length;
        }

        return sum;
    }

    set(key, value) {
        const index = this._hashFunction(key)
        if(!this.keyMap[index]){
            this.keyMap[index] = []; // Initialize the specific index as an empty array
        } 

        this.keyMap[index].push([key, value])
        return this;
    }

    get(key) {
        const index = this._hashFunction(key);

        if(this.keyMap[index]) {
            for(let i = 0; i < this.keyMap[index].length; i++) {
                if(this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined
    }

    getAllKeys() {
        const keys = []

        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; j < this.keyMap.length; j++) {
                    keys.push(this.keyMap[i][j][0])
                }
            }
        }
        return keys;
        }


    getAllValues() {
        const values = []

        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; j< this.keyMap[i].length; j++) {
                    values.push(this.keyMap[i][j][1])
                }
            }
        }
        return values;
    }
}

const phoneBook = new HashTable() 
phoneBook.set("john", "555-444-333")
phoneBook.set("Loke", "555-444-555")
phoneBook.set("jems", "555-666-333")
phoneBook.set("Devin", "555-444-777")
phoneBook.set("Jenne", "000-444-333")





// console.log(phoneBook.get("john"))
// console.log(`${phoneBook.getAllKeys()}, ${phoneBook.getAllValues()}`)
// console.log(phoneBook.getAllValues())
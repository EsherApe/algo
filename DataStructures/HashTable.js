//  search O(1)
//  insert O(1)
//  lookup O(1)
//  delete O(1)
//  could take more memory O(n)

class HashTable {
    constructor(size) {
        this.data = new Array(size) // immitate memory size
    }

    _hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
            this.data.length
        }
        return hash
    } // O(1) because really small loop

    set(key, value) {
        const address = this._hash(key)

        if (!this.data[address]) {
            this.data[address] = []
        }
        this.data[address].push([key, value])
    } // O(1)

    get(key) {
        const address = this._hash(key)
        const currentBucket = this.data[address]

        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key) {
                    return currentBucket[i][0]
                }
            }
        }

        return undefined
    } // O(1) || O(n) if collision because of law memory

    keys() {
        let keysArray = []

        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0])
            }
        }

        return keysArray
    } // O(n)
}

const myHashTable = new HashTable(50) // memory size is  50

myHashTable.set('grapes', 1000)
myHashTable.set('apples', 54)
myHashTable.set('oranges', 2)

console.log(myHashTable.keys())
